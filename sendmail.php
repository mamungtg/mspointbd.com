<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

date_default_timezone_set('Asia/Dhaka'); // your timezone

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars(trim($_POST['name']));
    $mail = htmlspecialchars(trim($_POST['mail']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (empty($name) || empty($mail) || empty($message)) {
        die("All fields are required.");
    }

    if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        die("Invalid mail format.");
    }

    // -------------------
    // LOG SUBMISSIONS
    // -------------------
    $logFile = __DIR__ . "/contact_log.txt";

    $logEntry = "----- New Submission -----\n" .
                "Date: " . date("Y-m-d H:i:s") . "\n" .
                "IP: " . $_SERVER['REMOTE_ADDR'] . "\n" .
                "Name: $name\n" .
                "Mail: $mail\n" .
                "Message:\n$message\n" .
                "-------------------------\n\n";

    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);

    // -------------------
    // SEND MAIL VIA ZOHO
    // -------------------

    $emailBody = "
        <strong>Name:</strong> $name <br>
        <strong>Mail:</strong> $mail <br><br>
        <strong>Message:</strong><br>$message
    ";

    $mailServer = new PHPMailer(true);

    try {
        // SMTP CONFIG
        $mailServer->isSMTP();
        $mailServer->Host       = 'smtp.zoho.com';
        $mailServer->SMTPAuth   = true;
        $mailServer->Username   = 'info@mspointbd.com';  
        $mailServer->Password   = 'YOUR_ZOHO_APP_PASSWORD'; 
        $mailServer->SMTPSecure = 'tls';
        $mailServer->Port       = 587;

        // MAIL SETTINGS
        $mailServer->setFrom('info@mspointbd.com', 'MS POINT Website');
        $mailServer->addAddress('info@mspointbd.com');
        $mailServer->addReplyTo($mail, $name);

        $mailServer->isHTML(true);
        $mailServer->Subject = "New Message from MS POINT Website";
        $mailServer->Body    = $emailBody;

        $mailServer->send();
        echo "Message sent successfully!";
        
    } catch (Exception $e) {
        echo "Mailer Error: {$mailServer->ErrorInfo}";
    }
}
?>
