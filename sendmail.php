<?php
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

    $to = "info@mspoint.com";  
    $subject = "New Message from MS POINT Website";
    $body = "Name: $name\nMail: $mail\n\nMessage:\n$message";
    $headers = "From: $mail";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Failed to send message. Please try again.";
    }
}
?>
