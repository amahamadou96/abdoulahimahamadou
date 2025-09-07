<?php
if ($_POST) {
    // Récupération des données du formulaire
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $numero = htmlspecialchars($_POST['numero']);
    $sujet = htmlspecialchars($_POST['sujet']);
    $message = htmlspecialchars($_POST['message']);
    
    // Votre adresse email où vous voulez recevoir les messages
    $destinataire = "mahamadouabdoulahi566@gmail.com"; // CHANGEZ CETTE ADRESSE
    
    // Sujet de l'email
    $sujet_email = "Nouveau message depuis votre site - " . $sujet;
    
    // Corps de l'email
    $corps_message = "
    Nouveau message reçu depuis votre site web:
    
    Nom: $nom
    Email: $email
    Numéro: $numero
    Sujet: $sujet
    
    Message:
    $message
    
    ---
    Message envoyé depuis votre formulaire de contact
    ";
    
    // En-têtes de l'email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Envoi de l'email
    if (mail($destinataire, $sujet_email, $corps_message, $headers)) {
        // Redirection vers une page de succès ou message
        echo "<script>alert('Message envoyé avec succès!'); window.history.back();</script>";
    } else {
        // Message d'erreur
        echo "<script>alert('Erreur lors de l\\'envoi du message.'); window.history.back();</script>";
    }
} else {
    // Redirection si accès direct au fichier
    header("Location: index.html");
}
?>