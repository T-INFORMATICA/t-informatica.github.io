<?php

class MenuModel {
    private $_view = null;
    private $_application = null;

    function __construct(MenuView $view, Application $app) {
        $this->_view = $view;
        $this->_application = $app;

        $this->Init();
    }
    
    function Init() {
        if ($this->_application->IsLoggedIn()) {
            $name = $this->_application->GetUserName();
            $email = $this->_application->GetUserEmail();

            $this->_view->SetData($name);
        }
    }
}