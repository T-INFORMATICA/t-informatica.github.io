<?php

class Application {
    private $_leerling = null;
    private $_termen = array();
    private $_datamanager = null;

    function __construct() {
        $this->_datamanager = new DataManager();

        $this->_termen = $this->_datamanager->QueryTermen();
    }

    function IsLoggedIn() {
        return $this->_leerling != null;
    }

    function SetUserByEmail($email) {
        $this->_leerling = $this->_datamanager->QueryLeerling($email);
        if ($this->_leerling === null) {
            return false;
        }

        $evaluaties = $this->_datamanager->QueryLeerlingEvaluaties($this->_leerling);
        foreach($evaluaties as $eval) {
            $this->_leerling->AddEvaluatie($eval);
        }

        $termen = $this->_datamanager->QueryLeerlingTermen($this->_leerling);
        foreach($termen as $term) {
            $this->_leerling->Addterm($term);
        }

        return true;
    }

    function GetUserName() {
        return $this->_leerling->GetName();
    }

    function GetUserEmail() {
        return $this->_leerling->GetEmail();
    }

    function GetOpdrachtenPerDatum() {
        return $this->_leerling->GetOpdrachtenPerDatum();
    }

    function GetEvaluatiesVanOpdracht($opdracht, $datum) {
        return $this->_leerling->GetEvaluatiesVanOpdracht($opdracht, $datum);
    }

    function GetEvaluatieCommentaar($opdracht, $datum, $doelstelling) {
        return $this->_leerling->GetEvaluatieCommentaar($opdracht, $datum, $doelstelling);
    }

    function GetGeevalueerdeOnderwerpen() {
        return $this->_leerling->GetGeevalueerdeOnderwerpen();
    }

    function GetGeevalueerdeDoelstellingen($onderwerp) {
        return $this->_leerling->GetGeevalueerdeDoelstellingen($onderwerp);
    }

    function GetDoelstellingWaarde($doelstelling) {
        return $this->_leerling->GetDoelstellingWaarde($doelstelling);
    }

    function GetDoelstellingCommentaar($doelstelling) {
        return $this->_leerling->GetDoelstellingCommentaar($doelstelling);
    }

    function GetDoelstellingWoordenMetDefinities($doelstelling) {
        $woorden = array();

        foreach($this->_termen as $term) {
            if ($term->GetDoelstelling()->GetNaam() == $doelstelling) {
                $woorden[$term->GetNaam()] = $term->GetDefinitie();
            }
        }

        return $woorden;
    }

    function GetOnderwerpVanDoelstelling($goal) {
        foreach($this->_termen as $term) {
            if ($term->GetDoelstelling()->GetNaam() == $goal) {
                return $term->GetDoelstelling()->GetOnderwerp();
            }
        }
        return false;
    }

    function GetOnderwerpWoordenMetDefinities($onderwerp) {
        $woorden = array();
        $geleerdeWoorden = $this->_leerling->GetWoordenGeleerd();

        foreach($this->_termen as $term) {
            if ($term->GetDoelstelling()->GetOnderwerp() == $onderwerp) {
                $woorden[$term->GetNaam()] = $term->GetDefinitie();
                if (in_array($term, $geleerdeWoorden) == false) {
                    $woorden[$term->GetNaam()] = $term->GetDefinitie();
                }
            }
        }

        return $woorden;
    }

    function GetDoelstellingAantalWoordenGeleerd($doelstelling) {
        return count($this->_leerling->GetDoelstellingWoordenGeleerd($doelstelling));
    }

    function GetDoelstellingWoordenTotaal($doelstelling) {
        $count = 0;

        foreach($this->_termen as $term) {
            if ($term->GetDoelstelling()->GetNaam() == $doelstelling) {
                $count++;
            }
        }

        return $count;
    }
}