<?php

class Leerling {
    private $_email = "";
    private $_voornaam = "";
    private $_achternaam = "";
    private $_klas = "";
    private $_evaluaties = array();
    private $_termen = array();

    function __construct($email, $voornaam, $achternaam, $klas) {
        $this->_email = $email;
        $this->_voornaam = $voornaam;
        $this->_achternaam = $achternaam;
        $this->_klas = $klas;
    }

    function GetEmail() { return $this->_email; }

    function GetName() { return $this->_voornaam . " " . $this->_achternaam; }

    function AddEvaluatie($evaluatie) {
        $this->_evaluaties[] = $evaluatie;
    }

    function AddTerm($term) {
        $this->_termen[] = $term;
    }

    function GetGeevalueerdeOnderwerpen() {
        $onderwerpen = array();
        foreach($this->_evaluaties as $eval) {
            $onderwerp = $eval->GetDoelstelling()->GetOnderwerp();
            if (in_array($onderwerp, $onderwerpen) == false) {
                $onderwerpen[] = $onderwerp;
            }
        }

        return $onderwerpen;
    }

    function GetGeevalueerdeDoelstellingen($onderwerp) {
        $doelstellingen = array();
        foreach($this->_evaluaties as $eval) {
            $doelstelling = $eval->GetDoelstelling()->GetNaam();
            if ($eval->GetDoelstelling()->GetOnderwerp() == $onderwerp &&
                in_array($doelstelling, $doelstellingen) == false) {
                $doelstellingen[] = $doelstelling;
            }
        }

        return $doelstellingen;
    }

    function GetDoelstellingWaarde($doelstelling) {
        $evalProgress = array("A" => array("A" => 0,    "B" => -0.5, "C" => -1.5, "D" => -1.5, "E" => -1.5),
                              "B" => array("A" => 1,    "B" => 0,    "C" => -1,   "D" => -1.5, "E" => -1.5),
                              "C" => array("A" => 1.5,  "B" => 0.5,  "C" => 0,    "D" => -1,   "E" => -1.5),
                              "D" => array("A" => 2,    "B" => 1,    "C" => 0.5,  "D" => 0,    "E" => -1.5),
                              "E" => array("A" => 2,    "B" => 1.5,  "C" => 1,    "D" => 0,    "E" => 0)
        );
        
        $evaluaties = array();
        foreach($this->_evaluaties as $eval) {
            $evaluatieDoelstelling = $eval->GetDoelstelling()->GetNaam();
            if ($evaluatieDoelstelling == $doelstelling) {
                $evaluaties[$eval->GetDatum()] = $eval;
            }
        }

        ksort($evaluaties);
        $evaluaties = array_values($evaluaties);
        $resultCijfer = $this->_LetterNaarCijfer($evaluaties[0]->GetWaarde());
        for ($i = 1; $i < count($evaluaties); ++$i) {
            $eval = $evaluaties[$i];

            $resultLetter = $this->_CijferNaarLetter($resultCijfer);
            $behaaldeLetter = $eval->GetWaarde();
            $resultDelta = $evalProgress[$resultLetter][$behaaldeLetter];

            $resultCijfer += $resultDelta;

        }

        // bereken 1 waarde uit de lijst met evaluaties
        // return de waarde
        return $this->_CijferNaarLetter($resultCijfer); 
    }

    function GetDoelstellingCommentaar($doelstelling) {
        $evaluaties = array();
        foreach($this->_evaluaties as $eval) {
            $evaluatieDoelstelling = $eval->GetDoelstelling()->GetNaam();
            if ($evaluatieDoelstelling == $doelstelling) {
                $evaluaties[$eval->GetDatum()] = $eval;
            }
        }
        ksort($evaluaties);
        $evaluaties = array_values($evaluaties);

        // vind de gepaste commentaar bij de waarde
        // return de commentaar
        return "";
//        return "Etiam finibus sapien vel est suscipit, nec vestibulum nibh sollicitudin. Nam ac efficitur arcu, id porta ante. Ut egestas odio ut urna mollis porta. Aliquam vel dignissim sapien. Vivamus tincidunt et magna vel hendrerit.";
    }

    function GetOpdrachtenPerDatum() {
        $opdrachtenPerDatum = array();
        foreach($this->_evaluaties as $eval) {
            if (array_key_exists($eval->GetDatum(), $opdrachtenPerDatum) == false) {
                $opdrachtenPerDatum[$eval->GetDatum()] = array();
            }

            if (in_array($eval->GetOpdracht(), $opdrachtenPerDatum[$eval->GetDatum()]) == false) {
                $opdrachtenPerDatum[$eval->GetDatum()][] = $eval->GetOpdracht();
            }
        }

        return $opdrachtenPerDatum;
    }

    function GetEvaluatiesVanOpdracht($opdracht, $datum) {
        $evaluaties = array();
        foreach($this->_evaluaties as $eval) {
            if ($eval->GetDatum() == $datum && $eval->GetOpdracht() == $opdracht) {
                $evaluaties[$eval->GetDoelstelling()->GetNaam()] = $eval->GetWaarde();
            }
        }
        return $evaluaties;
    }

    function GetEvaluatieCommentaar($opdracht, $datum, $doelstelling) {
        $evaluaties = array();
        foreach($this->_evaluaties as $eval) {
            if ($eval->GetDatum() == $datum && $eval->GetOpdracht() == $opdracht && $eval->GetDoelstelling()->GetNaam() == $doelstelling) {
                return $eval->GetCommentaar();
            }
        }
        return false;
    }

    function GetWoordenGeleerd() {
        return $this->_termen;
    }

    function GetDoelstellingWoordenGeleerd($doelstelling) {
        $result = array();

        foreach($this->_termen as $term) {
            if ($term->GetDoelstelling()->GetNaam() == $doelstelling) {
                $result[] = $term;
            }
        }

        return $result;
    }
    

    private function _LetterNaarCijfer($letter)
    {
        $arr = array("A" => 2, "B" => 1, "C" => 0, "D" => -1, "E" => -2);
        return $arr[$letter];
    }

    private function _CijferNaarLetter($cijfer)
    {
        $cijfer = $cijfer < 0 ? ceil($cijfer) : floor($cijfer);
        $arr = array(2 => "A", 1 => "B", 0 => "C", -1 => "D", -2 => "E");
        return $arr[$cijfer];
    }
}