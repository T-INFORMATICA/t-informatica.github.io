<?php

class EvaluatiesModel {
    private $_view = null;
    private $_application = null;

    function __construct(EvaluatiesView $view, Application $app) {
        $this->_view = $view;
        $this->_application = $app;

        $this->Init();
    }
    
    function Init() {
        $opdrachten = $this->_application->GetOpdrachtenPerDatum();
        krsort($opdrachten);

        foreach($opdrachten as $datum => $opdrachten) {
            foreach($opdrachten as $opdracht) {
                $evaluaties = $this->_application->GetEvaluatiesVanOpdracht($opdracht, $datum);

                foreach($evaluaties as $doelstelling => $waarde) {
                    $commentaar = $this->_application->GetEvaluatieCommentaar($opdracht, $datum, $doelstelling);

                    $this->_view->AddEvaluatie($datum, $opdracht, $doelstelling, $waarde, $commentaar);
                }
            }
        }
    }
}