<?php

class Term {
    private $_naam = "";
    private $_definitie = "";
    private $_doelstelling = null;

    function __construct($naam, $definitie, $doelstelling) {
        $this->_naam = $naam;
        $this->_definitie = $definitie;
        $this->_doelstelling = $doelstelling;
    }

    function GetDoelstelling() { return $this->_doelstelling; }

    function GetDefinitie() { return $this->_definitie; }

    function GetNaam() { return $this->_naam; }
}