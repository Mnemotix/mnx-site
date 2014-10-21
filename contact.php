<?php
	// ========== Enter your email address here ========== //
	$to = "pymiche@gmail.com";
	
	// Clean up the input values
	foreach($_POST as $key => $value) {
		if(ini_get('magic_quotes_gpc'))
			$_POST[$key] = stripslashes($_POST[$key]);
		
		$_POST[$key] = htmlspecialchars(strip_tags($_POST[$key]));
	}
	
	// Assign the input values to variables for easy reference
	$name = $_POST["name"];
	$email = $_POST["email"];
	$subject = $_POST["subject"];
	$message = $_POST["message"];
	
	
	// Send the email
	if($subject!=""){
		$subject = "Contact Form: $subject";
	}
	else {
		$subject = "Contact Form: $name";
	}
	$message = "$message";
	$headers = "From: ".$name." <".$email.">" . "\r\n" . "Reply-To: " . $email;
	
	mail($to, $subject, $message, $headers);
	
	// Output success message
	die("<p class='success'>Thank you! Your message has been successfully sent!</p>");
	
?>