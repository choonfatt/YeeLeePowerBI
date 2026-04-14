<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Verify CAPTCHA
    $captcha_input = isset($_POST['captcha_input']) ? intval($_POST['captcha_input']) : 0;
    
    if (!isset($_SESSION['captcha_result']) || $captcha_input !== $_SESSION['captcha_result']) {
        header("Location: contact.php?status=error&message=Incorrect CAPTCHA verification. Please try again.");
        exit;
    }

    // 2. Clear CAPTCHA after successful use
    unset($_SESSION['captcha_result']);

    // 3. Sanitize inputs
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // 4. Validate inputs
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        header("Location: contact.php?status=error&message=All fields are required.");
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: contact.php?status=error&message=Invalid email address.");
        exit;
    }

    // 5. "Send" the query (In production, replace with mail() or a mailer library)
    // For now, we simulate a successful submission.
    
    /* 
    PHP mail() example:
    $to = "customerservice@unikampar.com.my";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=utf-8";
    $email_body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";
    
    if (mail($to, "Contact Form: $subject", $email_body, $headers)) {
        header("Location: contact.php?status=success");
    } else {
        header("Location: contact.php?status=error&message=Failed to send email. Please contact us directly.");
    }
    */

    // Simulate success for demo
    header("Location: contact.php?status=success");
    exit;

} else {
    // Redirect back if accessed directly
    header("Location: contact.php");
    exit;
}
?>
