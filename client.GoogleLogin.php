<?php

require_once($_SERVER['DOCUMENT_ROOT'] . '/libraries/google-api-php-client-2.2.3/vendor/autoload.php');

// Start session
if(!session_id()){
    session_start();
}
 
// Call Google API
$gClient = new Google_Client();
$gClient->setAuthConfig('client_secret.json');
$gClient->setRedirectUri('http://svb.piustien.net/_t-inf-lms/gauth.php');
$gClient->addScope('https://www.googleapis.com/auth/userinfo.email');
?>