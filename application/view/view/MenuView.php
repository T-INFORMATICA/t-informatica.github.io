<?php

class MenuView {
    private $_data = array("loggedIn" => false, "studentNaam" => "");

    function __construct($authUrl) {
        $this->_data["url"] = filter_var($authUrl, FILTER_SANITIZE_URL);
    }

    function SetData($studentNaam) {
        $this->_data = array("loggedIn" => true, "studentNaam" => $studentNaam, "url" => "");
    }

    function GetHTML() {

        $m = new Mustache_Engine(array(
            'loader' => new Mustache_Loader_FilesystemLoader(__DIR__ . "/templates"),
        ));
        $this->_htmlString = $m->render("tmpl.menu", $this->_data);

        return $this->_htmlString; 
    }
}