<?php 
    session_start(); 
    $homePath = "../../";
    $mainPath = $homePath."../";
    include $mainPath."mainPaths.php";
    include $libPath.'mainLibs.php';
    header("Location: ".$homePath);
?>