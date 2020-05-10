<?php

spl_autoload_register('Autoloader');

require_once $_SERVER['DOCUMENT_ROOT'] . "/_t-inf-lms/application/libraries/mustache.php-2.12.0/mustache.php";

function Autoloader($className)
{
    $paths = array("/_t-inf-lms/application/view/view/",
                   "/_t-inf-lms/application/view/model/",
                   "/_t-inf-lms/application/view/controller/",
                   "/_t-inf-lms/application/domain/",
                   "/_t-inf-lms/application/data/",
                   "/_t-inf-lms/application/data/credentials/",
                   "/_t-inf-lms/application/libraries/mustache.php-2.12.0/");

    foreach($paths as $path) {
        $path = $_SERVER['DOCUMENT_ROOT'] . $path . $className . ".php";
        if (file_exists($path)) {
            include $path;
            return;
        }
    }
}