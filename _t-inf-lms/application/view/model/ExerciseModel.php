<?php

class ExerciseModel {
    private $_view = null;
    private $_application = null;
    private $_numExerciseSet = 4;
    private $_exerciseSet = array();
    private $_currentResult = array();

    function __construct(ExerciseView $view, Application $app) {
        $this->_view = $view;
        $this->_application = $app;
    }

    function SetReeksId($reeksId) {
        $this->_view->SetReeksId($reeksId);
    }

    private function _SelectVolgendeOefening() {

        if (count($this->_exerciseSet) <= 1) {
            $this->_view->Finished();
        }
        else {
            $exercise = $this->_exerciseSet[1];
            $this->_view->SetExercise($exercise["question"], $exercise["answers"], $exercise["type"]);
        }

    }

    function SetCurrentResult($exerciseResults) {
        $this->_currentResult = $exerciseResults;

        $numRightAnswers = 0;
        foreach($exerciseResults as $result) {
            if ($result["isCorrect"] == true) {
                $numRightAnswers++;
            }
        }

        $this->_view->SetResultaat($numRightAnswers, count($exerciseResults));
    }

    function ValidateAnswer($answer) {
        $exercise = $this->_exerciseSet[0];
        if ($exercise["answers"][0] == $answer) {
            $this->_view->WasAntwoordJuist(true);
            return true;
        }
        else {
            $comment = "Het juiste antwoord is: " . $exercise["answers"][0];
            $this->_view->WasAntwoordJuist(false, $comment);
            return false;
        }
    }

    function SetOefeningenreeks($set) {
        $this->_exerciseSet = $set;
        $this->_SelectVolgendeOefening();
    }

    function CreateOefeningenreeks($goal) {
        $onderwerp = $this->_application->GetOnderwerpVanDoelstelling($goal);
        $definitions = $this->_application->GetOnderwerpWoordenMetDefinities($onderwerp); 
        $size = $this->_numExerciseSet+1;

        $size2 = ceil($size / 2);
        $size1 = $size - $size2;
        // get $size number of random elements, where an element may occur twice
        $keys = array_rand($definitions, $size1);
        $keys = array_merge($keys, array_rand($definitions, $size2));
    
        $indexedDefinitions = array_keys($definitions);
    
        $exercises = array();
    
        foreach ($keys as $key) {
            $value = $definitions[$key];
    
            // choose randomly between a term question or a definition question
            $questionSources = array("term", "definition");
            $questionSource = $questionSources[array_rand($questionSources)];
            $question = $questionSource == "term" ? $key : $value;
    
            // choose randomly between a write or multiple choice question type. If the question is a definition question, a write question type can not be used.
            $questionType = "multi";
            if ($questionSource == "definition") {
                $questionTypes = array("write", "multi");
                $questionType = $questionTypes[array_rand($questionTypes)];
            }
    
            $answers = array();
            // look up the correct answer
            $correctAnswer = $questionSource == "term" ? $value : $key;
            $answers[] = $correctAnswer;
    
            // if the question is a multi question type, add false answers to the list of answers. false answers are selected from the list of answers for questions from the same chapter
            if ($questionType == "multi") {
                $index = array_search($key, $indexedDefinitions);
                $iterStart = max($index - 4, 0);
                $iterEnd = min($index + 4, count($definitions));
                $possibleWrongAnswers = array();
                for ($i = $iterStart; $i < $iterEnd; ++$i) {
                    if ($i == $index) {
                        continue;
                    }
                    if ($questionSource == "term") {
                        $possibleWrongAnswers[$definitions[$indexedDefinitions[$i]]] = $indexedDefinitions[$i];
                    }
                    else if ($questionSource == "definition") {
                        $possibleWrongAnswers[$indexedDefinitions[$i]] = $definitions[$indexedDefinitions[$i]];
                    }
                }
                $answers = array_merge($answers, array_rand($possibleWrongAnswers, 3));
            } 
    
            $exercise = array("term" => $key, "question" => $question, "type" => $questionType, "answers" => $answers);
            //print_r($exercise);
            $exercises[] = $exercise;
        }

        $this->_exerciseSet = $exercises;
        $this->_SelectVolgendeOefening();
        return $exercises;
    }
}