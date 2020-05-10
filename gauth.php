<?php
require_once('client.GoogleLogin.php');

if(isset($_GET['code'])){
    $gClient->authenticate($_GET['code']);
    $_SESSION['token'] = $gClient->getAccessToken();
    //header('Location: index.php');
    echo "<script>window.close();</script>";
}
?>