<?php

class EvaluatiesView {
    private $_data = array();


    function AddEvaluatie($datum, $opdrachtNaam, $doelstelling, $waarde, $commentaar) {

        $opdrachtExists = false;
        //foreach($this->_data as $opdracht) {
        for($i = 0; $i < count($this->_data); ++$i) {
            $opdracht = $this->_data[$i];
            if ($opdracht["datum"] == $datum && $opdracht["opdrachtNaam"] == $opdrachtNaam) {
                $opdrachtExists = true;
                $this->_data[$i]["evaluaties"][] = array("doelstelling" => $doelstelling, "waarde" => $waarde, "commentaar" => $commentaar);
            }
        }

        if ($opdrachtExists == false) {
            $opdracht = array("datum" => $datum, "opdrachtNaam" => $opdrachtNaam, "evaluaties" => array(array("doelstelling" => $doelstelling, "waarde" => $waarde, "commentaar" => $commentaar)));
            $this->_data[] = $opdracht;
        }
    }

    function GetHTML() {
        $evaluatiesData = array("opdrachten" => $this->_data);

        $m = new Mustache_Engine(array(
            'loader' => new Mustache_Loader_FilesystemLoader(__DIR__ . "/templates"),
        ));
        $this->_htmlString = $m->render("tmpl.evaluaties", $evaluatiesData);

        return $this->_htmlString; 
    }
}