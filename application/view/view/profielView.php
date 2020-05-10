<?php

class ProfielView {
    private $_data = array();

    function SetData($studentNaam, $email, $binSubDomain, $ftpUser, $ftpPassword, $sqlUser, $sqlPassword) {
        $this->_data = array("studentNaam" => $studentNaam,
                             "email" => $email,
                             "binX" => $binSubDomain,
                             "ftpUser" => $ftpUser,
                             "ftpPassword" => $ftpPassword, 
                             "sqlUser" => $sqlUser,
                             "sqlPassword" => $sqlPassword);
    }

    function GetHTML() {

        $m = new Mustache_Engine(array(
            'loader' => new Mustache_Loader_FilesystemLoader(__DIR__ . "/templates"),
        ));
        $this->_htmlString = $m->render("tmpl.profiel", $this->_data);

        return $this->_htmlString; 
    }
}