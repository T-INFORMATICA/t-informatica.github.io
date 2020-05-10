<?php

class Evaluatie {
    private $_doelstelling = null;
    private $_waarde = "";
    private $_commentaar = "";
    private $_datum = null;
    private $_opdracht = "";
    

    function __construct($doelstelling, $waarde, $commentaar, $datum, $opdracht) {
        $this->_doelstelling = $doelstelling;
        $this->_waarde = $waarde;
        $this->_commentaar = $commentaar;
        $this->_datum = $datum;
        $this->_opdracht = $opdracht;
    }

    function GetDoelstelling() {
        return $this->_doelstelling;
    }

    function GetOpdracht() {
        return $this->_opdracht;
    }

    function GetDatum() {
        return $this->_datum;
    }

    function GetWaarde() {
        return $this->_waarde;
    }

    function GetCommentaar() {
        return $this->_commentaar;
    }
}