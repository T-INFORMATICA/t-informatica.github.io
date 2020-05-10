<?php

class PuntenboekView {
    private $_evaluaties = array();

    function AddEvaluatie($onderwerp, $doelstelling, $waarde, $commentaar, $woordenGeleerd, $woordenTotaal) {

        $subjectExists = false;
        for ($i = 0; $i < count($this->_evaluaties); ++$i) {
            $eval = $this->_evaluaties[$i];
            if ($eval["onderwerp"] == $onderwerp) {
                $subjectExists = true;
                $goalExists = false;
                for ($j = 0; $j < count($eval["doelstellingen"]); ++$j) {
                    $goal = $eval["doelstellingen"][$j];

                    if ($goal["doelstelling"] == $doelstelling) {
                        $goalExists = true;
                        $goal["$waarde"] = $waarde;
                        $goal["commentaar"] = $commentaar;
                        $goal["woordenGeleerd"] = $woordenGeleerd;
                        $goal["woordenTotaal"] = $woordenTotaal;
                        break;
                    }
                }

                if ($goalExists == false) {
                    $goal = array();
                    $goal["doelstelling"] = $doelstelling;
                    $goal["$waarde"] = $waarde;
                    $goal["commentaar"] = $commentaar;
                    $goal["woordenGeleerd"] = $woordenGeleerd;
                    $goal["woordenTotaal"] = $woordenTotaal;

                    $this->_evaluaties[$i]["doelstellingen"][] = $goal;
                }
                break;
            }
        }

        if ($subjectExists == false) {
            $newSubject = array();
            $newSubject["onderwerp"] = $onderwerp;

            $goal = array();
            $goal["doelstelling"] = $doelstelling;
            $goal["$waarde"] = $waarde;
            $goal["commentaar"] = $commentaar;
            $goal["woordenGeleerd"] = $woordenGeleerd;
            $goal["woordenTotaal"] = $woordenTotaal;

            $newSubject["doelstellingen"] = array($goal);

            $this->_evaluaties[] = $newSubject;
        }

    }


    function GetHTML() {

        $profielData = array("punten" => $this->_evaluaties);

        $m = new Mustache_Engine(array(
            'loader' => new Mustache_Loader_FilesystemLoader(__DIR__ . "/templates"),
        ));
        $this->_htmlString = $m->render("tmpl.puntenboek", $profielData);

        return $this->_htmlString; 
    }
} 