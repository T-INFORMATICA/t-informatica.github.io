<?php

class MenuController {
    private $_model = null;

    function __construct(MenuModel $model) {
        $this->_model = $model;

        $this->_model->Init();
    }


}