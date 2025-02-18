<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

function send_mail() {
  require 'path/to/PHPMailer/src/Exception.php';
  require 'path/to/PHPMailer/src/PHPMailer.php';
  require 'path/to/PHPMailer/src/SMTP.php';

  $mail = new PHPMailer(true);
  try {
    // Server settings
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'mail.gyanotech.in';                  // SMTP server (cPanel email host)
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'info@gyanotech.in';                  // SMTP username (your cPanel email)
    $mail->Password   = 'klcNs1rcLC';                 // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            // Enable SSL encryption
    $mail->Port       = 465;                                    // TCP port to connect to (use 587 for TLS)

    // Recipients
    $mail->setFrom('info@gyanotech.in', 'info');         // Sender email and name
    $mail->addAddress('vtotla.tech@gmail.com', 'Vaibhav Totla'); // Recipient email and name

    // Content
    $mail->isHTML(true);                                        // Set email format to HTML
    $mail->Subject = 'Test Email from cPanel SMTP';
    $mail->Body    = 'This is a <b>test email</b> sent using cPanel SMTP and PHPMailer.';
    $mail->AltBody = 'This is a plain text version of the email content.';

    // Send the email
    $mail->send();
      echo 'Email has been sent successfully!';
    } catch (Exception $e) {
      echo "Email could not be sent. Error: {$mail->ErrorInfo}";
    }
}
