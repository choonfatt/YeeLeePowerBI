<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

function generateCaptcha() {
    $num1 = rand(1, 10);
    $num2 = rand(1, 10);
    $_SESSION['captcha_result'] = $num1 + $num2;
    return [$num1, $num2];
}

// Generate new captcha if not exists or requested via refresh
if (!isset($_SESSION['captcha_result']) || (isset($_GET['refresh']) && $_GET['refresh'] == 1)) {
    $captcha = generateCaptcha();
}

$num1 = isset($captcha) ? $captcha[0] : rand(1, 10); // Placeholder if not regenerating
$num2 = isset($captcha) ? $captcha[1] : rand(1, 10); // Placeholder

// If it's a refresh request, just return the numbers and exit
if (isset($_GET['refresh']) && $_GET['refresh'] == 1) {
    header('Content-Type: application/json');
    echo json_encode(['num1' => $_SESSION['captcha_num1'], 'num2' => $_SESSION['captcha_num2']]);
    exit;
}
?>
<div class="uk-captcha-container" style="margin: 1rem 0;">
    <label style="display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--uk-primary);">
        Verification Required
    </label>
    <div class="uk-captcha">
        <div class="uk-captcha-code" id="captcha-code">
            <?php 
            $num1 = rand(1, 10);
            $num2 = rand(1, 10);
            $_SESSION['captcha_result'] = $num1 + $num2;
            echo "$num1 + $num2 = ?"; 
            ?>
        </div>
        <input
          type="number"
          name="captcha_input"
          id="captcha-input"
          placeholder="Result"
          required
          style="padding: 0.5rem; width: 80px; border: 1px solid var(--uk-border); border-radius: 4px; font-size: 1.25rem; text-align: center; outline: none;"
        />
    </div>
    <p style="font-size: 0.75rem; color: var(--uk-text-muted); margin-top: 0.5rem;">Solve the simple math to enable query submission.</p>
</div>
