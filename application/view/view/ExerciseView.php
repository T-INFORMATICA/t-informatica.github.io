<?php

class ExerciseView {
    private $_data = array(); 
    private $_type = "";
    private $_htmlString = ""; 
    private $_finished = false;
    private $_resultaatString = "";
    private $_moeilijkeWoorden = array();

    function SetExercise($question, $answers, $type) {
        shuffle($answers);

        $this->_data["question"] = $question;
        $this->_data["answers"] = array();
        for ($i = 0; $i < count($answers); ++$i) {
            $answer = $answers[$i];
            $this->_data["answers"][] = array("answer" => $answer, "counter" => $i);
        }
        $this->_type = $type;
    }

    function Finished() {
        $this->_finished = true;
    }
    
    function SetMoeilijkeWoorden($moeilijkeWoorden) {
        foreach($moeilijkeWoorden as $w) {
            $this->_moeilijkeWoorden[] = array("woord" => $w);
        }
    }
    
    function SetResultaat($behaald, $max) {
        $this->_resultaatString = "$behaald / $max";
    }

    function SetReeksId($reeksId) {
        $this->_data["exerciseSetId"] = $reeksId;
    }

    function WasAntwoordJuist($correct, $comment = "") {
        if ($correct == true) {
            $this->_data["previousCorrect"] = "Correct!";
        }
        else {
            $this->_data["previousIncorrect"] =  $comment;
        }
    }

    function GetHTML() {
        $m = new Mustache_Engine(array(
            'loader' => new Mustache_Loader_FilesystemLoader(__DIR__ . "/templates"),
        ));

        if ($this->_finished == false) {
            if ($this->_type == "multi") {
                $this->_htmlString = $m->render("tmpl.exercisemulti", $this->_data);
            }
            else if ($this->_type == "write") {
                $this->_htmlString = $m->render("tmpl.exercisewrite", $this->_data);
            }
        }
        else {
            $this->_data["moeilijkeWoorden"] = $this->_moeilijkeWoorden;
            $this->_data["resultaat"] = $this->_resultaatString;
            $this->_htmlString = $m->render("tmpl.exercisefinished", $this->_data);
        }

        return $this->_htmlString; 
    }
}