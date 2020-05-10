<?php

class ProfielController {
    private $_model = null;

    function __construct(ProfielModel $model) {
        $this->_model = $model;

        $this->_model->Init();
    }


}