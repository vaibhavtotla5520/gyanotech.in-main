<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function send_mail($name, $subject, $message)
{
  require 'vendor/autoload.php';
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
    $mail->addAddress("gyanotechitsolutions@gmail.com", "Gyanotech IT Solutions"); // Recipient email and name
    $mail->addCC('vtotla.tech@gmail.com', 'Vaibhav Totla');
    $mail->addCC('nsvashisth2000@gmail.com', 'Nishant Vashisth');
    $mail->addCC('vipinrwt9@gmail.com', 'Vipin Rawat');

    // Content
    $mail->isHTML(true);                                        // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $message;
    $mail->AltBody = '';

    // Send the email
    $mail->send();
    $return_arr = [
      'status' => 1,
      'msg' => 'Email has been sent successfully!'
    ];
  } catch (Exception $e) {
    $return_arr = [
      'status' => 0,
      'msg' => 'Email could not be sent. Error: {$mail->ErrorInfo}'
    ];
  }
  return $return_arr;
}

// send_mail();
function contact_action()
{
  $name = !empty($_POST["name"]) ? $_POST["name"] : "";
  $email = !empty($_POST["email"]) ? $_POST["email"] : "";
  $mobile = !empty($_POST["mobile"]) ? $_POST["mobile"] : "";
  $subject = !empty($_POST["subject"]) ? "GYANOTECH.IN - " . $_POST["subject"] : "";
  $message = !empty($_POST["message"]) ? $_POST["message"] : "";

  $content = "<!DOCTYPE html>
<html>
<head>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>
</head>
<body>
<table>
  <tr>
    <th>Name</th>
    <td>" . $name . "</td>
  </tr>
  <tr>
    <th>Email</th>
    <td>" . $email . "</td>
  </tr>
  <tr>
    <th>Mobile</th>
    <td>" . $mobile . "</td>
  </tr>
  <tr>
    <th>Message</th>
    <td>" . $message . "</td>
  </tr>
</table>

</body>
</html>";
  $mail_status = send_mail($name, $subject, $content);
  if ($mail_status['status'] == 1) {
    echo json_encode(['msg' => 'success']);
  } else {
    echo json_encode(['msg' => 'Try After Sometime']);
  }
}
