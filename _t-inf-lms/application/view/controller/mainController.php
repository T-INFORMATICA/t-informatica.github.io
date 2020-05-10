<?php

class MainController {
    private $_model = null;

    function __construct(MainModel $model) {
        $this->_model = $model;
        
        if (isset($_SESSION['token']) && !empty($_SESSION['token'])) {
            $success = $this->_model->LoginWithGoogle($_SESSION['token']);
            if ($success) {
                $page = "";
                if (isset($_GET['show']) && !empty($_GET['show'])) { 
                    $page = $_GET["show"];
                }

                $this->_model->SetPage($page);
            }
        }
        $this->_model->InitMenu();
    }


}