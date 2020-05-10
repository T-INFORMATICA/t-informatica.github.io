<?php

class ProfielModel {
    private $_view = null;
    private $_application = null;

    function __construct(ProfielView $view, Application $app) {
        $this->_view = $view;
        $this->_application = $app;

        $this->Init();
    }
    
    function Init() {
        $name = $this->_application->GetUserName();
        $email = $this->_application->GetUserEmail();

        $this->_view->SetData($name, $email, "bin20", "bin20", "Joske", "bin20", "Joske!");
    }
}