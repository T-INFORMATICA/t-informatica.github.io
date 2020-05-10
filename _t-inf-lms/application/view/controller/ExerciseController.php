<?php

class ExerciseController {
    private $_model = null;

    function __construct(ExerciseModel $model) {
        $this->_model = $model;
        $exerciseSet = null;
        $exerciseSetId = 0;
        $exercise = null;
        $exerciseResults = array();

        // check if an exercise set has already been made
        if (isset($_SESSION['reeks']) && !empty($_SESSION['reeks']) &&
            isset($_POST['exerciseSetId']) && !empty($_POST['exerciseSetId']) &&
            $_POST['exerciseSetId'] == $_SESSION['reeks']['reeksId']) {
                
            $exerciseSetId = $_SESSION['reeks']['reeksId'];
            $exerciseSet = $_SESSION['reeks']['oefeningen'];
            $this->_model->SetReeksId($exerciseSetId);
            $this->_model->SetOefeningenreeks($exerciseSet);
            
            if (isset($_POST['selectedAnswer']) && !empty($_POST['selectedAnswer'])) {
                $correct = $this->_model->ValidateAnswer($_POST['selectedAnswer']);
                
                $exerciseResults = array();
                if (isset($_SESSION['exerciseResults']) && !empty($_SESSION['exerciseResults'])) {
                    $exerciseResults =  $_SESSION["exerciseResults"];
                }
                $exerciseResult = array("term" => $exerciseSet[0]["term"], "isCorrect" => $correct);
                $exerciseResults[] = $exerciseResult;
                $this->_model->SetCurrentResult($exerciseResults);

                array_shift($exerciseSet);
            }
        }
        // if not, check if a goal has been set
        else if (isset($_GET['doelstelling']) && !empty($_GET['doelstelling'])) {

            $exerciseSetId = uniqid();
            $this->_model->SetReeksId($exerciseSetId);
            $exerciseSet = $this->_model->CreateOefeningenreeks($_GET['doelstelling']);

            array_shift($exerciseSet);
        }

        $_SESSION['reeks']['oefeningen'] = $exerciseSet;
        $_SESSION['reeks']['reeksId'] = $exerciseSetId;
        $_SESSION["exerciseResults"] = $exerciseResults;
    }
}