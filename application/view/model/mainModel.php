<?php

class MainModel {
    private $_view = null;
    private $_application = null;
    private $_gClient = null;

    function __construct(MainView $view) {
        $this->_view = $view;
        $this->_application = new Application();
        
        $this->_gClient = new Google_Client(); 
        $this->_gClient->setAuthConfig($_SERVER['DOCUMENT_ROOT'] . '/_t-inf-lms/client_secret.json');
        $this->_gClient->setRedirectUri('http://svb.piustien.net/_t-inf-lms/gauth.php');
        $this->_gClient->addScope('https://www.googleapis.com/auth/userinfo.email');
    }

    function LoginWithGoogle($token) {

        $loggedin = false;
        

        $this->_gClient->setAccessToken($token);

        if($this->_gClient->getAccessToken()) {
            // Get user profile data from google
            $userInfo = $this->_gClient->verifyIdToken();
            // Getting user profile info
            $userEmail = !empty($userInfo['email']) ? $userInfo['email'] : '';
            if (empty($userInfo) || empty($userEmail)) {
                $loggedin = false;
            } 
            else {
                $loggedin = true;
                $success = $this->_application->SetUserByEmail($userEmail);
                if ($success == false) {
                    echo "using test account";
                    $success = $this->_application->SetUserByEmail("soms.goeiemorgen@gmail.com");
                }
            }
        }else {
            $loggedin = false;
        }
        return $loggedin;
    }

    function InitMenu() {
        $menuView = new MenuView($this->_gClient->createAuthUrl());
        $menuModel = new MenuModel($menuView, $this->_application);
        $menuController = new MenuController($menuModel);

        $this->_view->SetMenuModel($menuModel);
        $this->_view->SetMenuView($menuView);
        $this->_view->SetMenuController($menuController);
    }

    function SetPage($page) {

        switch ($page) {
            case "evaluaties":
                $contentView = new EvaluatiesView();
                $contentModel = new EvaluatiesModel($contentView, $this->_application);
                $contentController = new EvaluatiesController($contentModel);
                break;
            case "profiel":
                $contentView = new ProfielView();
                $contentModel = new ProfielModel($contentView, $this->_application);
                $contentController = new ProfielController($contentModel);
                break;
            case "exercise":
                $contentView = new ExerciseView();
                $contentModel = new ExerciseModel($contentView, $this->_application);
                $contentController = new ExerciseController($contentModel);
                break;
            case "puntenboek":
            default:
                $contentView = new PuntenboekView();
                $contentModel = new PuntenboekModel($contentView, $this->_application);
                $contentController = new PuntenboekController($contentModel);
                break;
        }

        $this->_view->SetContentModel($contentModel);
        $this->_view->SetContentView($contentView);
        $this->_view->SetContentController($contentController);
    }
}