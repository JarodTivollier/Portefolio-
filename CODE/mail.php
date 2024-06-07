<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        $recipient = "jarod.tivollier@orange.fr";
        $subject = "Nouveau message de: $name - $subject";
        $email_content = "Nom: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Sujet: $subject\n\n";
        $email_content .= "Message:\n$message\n";

        $email_headers = "From: $name <$email>";

        if (mail($recipient, $subject, $email_content, $email_headers)) {
            echo "Merci! Votre message a été envoyé.";
        } else {
            echo "Oops! Quelque chose s'est mal passé et nous n'avons pas pu envoyer votre message.";
        }
    } else {
        echo "Veuillez remplir tous les champs du formulaire.";
    }
} else {
    echo "Il y a eu un problème avec votre soumission, veuillez réessayer.";
}
?>
