<?php
if(isset($_POST['submit'])){
    //put your email below
    $mailid="Enter your Email";
	//password of the email
	$password="Enter your Email password";
include('smtp/PHPMailerAutoload.php');
$mail = new PHPMailer(); 
$mail->SMTPDebug=3;
	$mail->IsSMTP(); 
	$mail->SMTPAuth = true; 
	$mail->SMTPSecure = 'tls'; 
	$mail->Host = "smtp.gmail.com";
	$mail->Port = "587"; 
	$mail->IsHTML(true);
	$mail->CharSet = 'UTF-8';
	$mail->Username = $mailid;
	$mail->Password = $password;
	$mail->SetFrom($mailid);
    $mail->Subject = $_POST['subject']." from ".$_POST['name']." and mail id is ".$_POST['email'];
	$mail->Body = $_POST['message'];
	$mail->AddAddress($mailid);
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>false,
		'verify_peer_name'=>false,
		'allow_self_signed'=>false
	));
	if(!$mail->Send()){
        echo "Something Went Wrong";
		// echo $mail->ErrorInfo;
	}else{
        echo "success";
    }
}

    ?>