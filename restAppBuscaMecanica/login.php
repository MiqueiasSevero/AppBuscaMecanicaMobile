<?php
    header('Access-Control-Allow-Origin: *');
	require_once('./conexao.php');

	 // receber os parâmetros via POST
    $email = $_POST["email"];
    $senha = $_POST["senha"];
    $sql = "SELECT id_user, email FROM tbl_user WHERE email = '$email'
               AND senha = '$senha'";
    
    $resultado = mysqli_query($con, $sql);
    if (mysqli_num_rows($resultado) > 0) {
        $usuario = mysqli_fetch_assoc($resultado);
        echo '{ "sucesso": true, "usuario": { "id": '.$usuario["id_user"].', "nome": "'.$usuario["email"].'" } }';
    } else {
        echo '{ "sucesso": false, "usuario": "" }';
    }


	


?>