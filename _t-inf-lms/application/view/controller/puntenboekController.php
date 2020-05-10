<?php

class PuntenboekController {
    private $_model = null;

    function __construct(PuntenboekModel $model) {
        $this->_model = $model;
    }


}