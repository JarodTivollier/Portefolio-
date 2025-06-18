<?php 
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


$email = 'jarod.tivollier@gmail.com'; 
$Subject = '';
$smtpHost = 'smtp.gmail.com';     
$smtpPort = 587;                  
$smtpUsername = 'jarod.tivollier@gmail.com'; 
$smtpPassword = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Nettoyage et validation des entrées
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    // Vérifier si toutes les données requises sont présentes
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "Erreur : Tous les champs sont requis.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Erreur : Adresse e-mail invalide.";
        exit;
    }

    $mail = new PHPMailer(true); 

    try {
        // Paramètres du serveur
        $mail->isSMTP();                                    
        $mail->Host       = $smtpHost;                      
        $mail->SMTPAuth   = true;                           
        $mail->Username   = $smtpUsername;                  
        $mail->Password   = $smtpPassword;                  
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
        // Pour le port 465 (SSL), utilise: PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = $smtpPort;                     
        $mail->CharSet    = 'UTF-8';                       
        $mail->Encoding   = 'base64';                       

        // Destinataires
        $mail->setFrom($smtpUsername, $name); 
        $mail->addAddress($recipientEmail);   
        $mail->addReplyTo($email, $name);     

        // Contenu de l'email
        $mail->isHTML(false); 
                               
        $mail->Subject = "[$subject] " . $defaultSubject; 
        $mail->Body    = "Nom: " . $name . "\n"
                       . "Email: " . $email . "\n"
                       . "Sujet: " . $subject . "\n\n"
                       . "Message:\n" . $message;

        $mail->send();
        header('Location: success.html'); 
        exit;
    } catch (Exception $e) {
        header('Location: error.html');
        exit;
    }
} else {
    header('Location: index.html'); 
    exit;
}

?>