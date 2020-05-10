<?php

class Doelstelling {
    private $_naam = "";
    private $_onderwerp = "";

    function __construct($naam, $onderwerp) {
        $this->_naam = $naam;
        $this->_onderwerp = $onderwerp;
    }

    function GetNaam() {
        return $this->_naam;
    }

    function GetOnderwerp() {
        return $this->_onderwerp;
    }
}