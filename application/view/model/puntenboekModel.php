<?php

class PuntenboekModel {
    private $_view = null;
    private $_application = null;

    function __construct(PuntenboekView $view, Application $app) {
        $this->_view = $view;
        $this->_application = $app;

        $this->Init();
    }

    function Init() {
        $onderwerpen = $this->_application->GetGeevalueerdeOnderwerpen();

        foreach($onderwerpen as $ond) {
            $doelstellingen = $this->_application->GetGeevalueerdeDoelstellingen($ond);
            foreach($doelstellingen as $goal) {
                $waarde = $this->_application->GetDoelstellingWaarde($goal);
                $commentaar = $this->_application->GetDoelstellingCommentaar($goal);
                $woordenGeleerd = $this->_application->GetDoelstellingAantalWoordenGeleerd($goal);
                $woordenTotaal = $this->_application->GetDoelstellingWoordenTotaal($goal);
                $this->_view->AddEvaluatie($ond, $goal, $waarde, $commentaar, $woordenGeleerd, $woordenTotaal);
            }
        }

    }
}