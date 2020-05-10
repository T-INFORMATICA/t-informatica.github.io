<?php

class EvaluatiesController {
    private $_model = null;

    function __construct(EvaluatiesModel $model) {
        $this->_model = $model;
    }


}