<?php


class MainView {
    private $_contentModel = null;
    private $_contentView = null;
    private $_contentController = null;
    
    private $_menuModel = null;
    private $_menuView = null;
    private $_menuController = null;

    function GetMenuHTML() {
        return $this->_menuView->GetHTML();
    }

    function GetContentHTML() {
        if ($this->_contentView == null) {
            return "";
        } 
        return $this->_contentView->GetHTML();
    }

    function SetContentModel($model) {
        $this->_contentModel = $model;
    }

    function SetContentView($view) {
        $this->_contentView = $view;
    }

    function SetContentController($controller) {
        $this->_contentController = $controller;
    }

    function SetMenuModel($model) {
        $this->_menuModel = $model;
    }

    function SetMenuView($view) {
        $this->_menuView = $view;
    }

    function SetMenuController($controller) {
        $this->_menuController = $controller;
    }
}

