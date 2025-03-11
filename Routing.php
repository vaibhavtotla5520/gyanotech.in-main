<?php
require "CommonFunctions/Functions.php";
$route = isset($_POST["route"]) && !empty($_POST["route"]) ? $_POST["route"] : "";

if (!empty($route)) {
    switch ($route) {
        case "contact_action":
            contact_action();
            break;
        case "newsletter_action":
            saveSubscribtion();
            break;
        default:
            echo json_encode(['msg' => 'Route Not Defined']);
    }
} else {
    echo json_encode(['msg' => 'Route is Empty']);
}