---
title: Home
---

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once $_SERVER['DOCUMENT_ROOT'] . "/_t-inf-lms/application/autoloader.php";

require_once('client.GoogleLogin.php');

$view = new MainView();
$model = new MainModel($view);
$controller = new MainController($model);
?>

<section id="profileContent">
    <a href="#studentNavigation" id="openNavButton" class="material-icons">menu</a>
    <nav id="studentNavigation">
        <h1>LMS</h1>
        <div class="studentLinks"> 
<?php
    echo $view->GetMenuHTML();
?>
        </div>
    </nav>

    <section id="chapterContent"> 
<?php
    echo $view->GetContentHTML();
?>
    </section>
</section>