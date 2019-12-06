<?php
	require_once('./conexao.php');

	 // receber os parâmetros via POST
    $email = $_POST["email"];
    $senha = $_POST["senha"];
    $sql = "SELECT id_pessoa, nome FROM tbl_pessoa
             WHERE email = '$email'
               AND senha = '$senha'";
    
    $resultado = mysqli_query($con, $sql);
    if (mysqli_num_rows($resultado) > 0) {
        $usuario = mysqli_fetch_assoc($resultado);
        echo '{ "sucesso": true, "usuario": { "id": '.$usuario["id_pessoa"].', "nome": "'.$usuario["nome"].'" } }';
    } else {
        echo '{ "sucesso": false, "usuario": "" }';
    }


	


?>