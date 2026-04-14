<?php 
if (session_status() == PHP_SESSION_NONE) { session_start(); }
include __DIR__ . '/includes/header.php'; 
?>

<section class="uk-section" style="background: var(--uk-primary); color: var(--uk-white); padding: 6rem 0 3rem;">
    <div class="uk-container">
        <h1 class="uk-title" style="color: var(--uk-white);">Contact Us</h1>
        <p class="uk-subtitle" style="color: rgba(255,255,255,0.8);">We are here to help you with your financial needs.</p>
    </div>
</section>

<section class="uk-section">
    <div class="uk-container">
        <?php if(isset($_GET['status']) && $_GET['status'] == 'success'): ?>
            <div style="background: #dcfce7; color: #166534; padding: 2rem; border-radius: 8px; max-width: 600px; margin: 0 auto 3rem; text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
                <h2 class="uk-title" style="color: #166534; font-size: 1.5rem;">Thank You!</h2>
                <p>Your query has been submitted successfully. Our team will contact you shortly.</p>
                <a href="contact.php" class="uk-btn uk-btn-primary" style="margin-top: 2rem; text-decoration: none;">SEND ANOTHER QUERY</a>
            </div>
        <?php elseif(isset($_GET['status']) && $_GET['status'] == 'error'): ?>
            <div style="background: #fee2e2; color: #991b1b; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; text-align: center;">
                <strong>Error:</strong> <?php echo htmlspecialchars($_GET['message'] ?? 'Something went wrong.'); ?>
            </div>
        <?php endif; ?>

        <div class="uk-grid" style="gridTemplateColumns: 1fr 1.5fr;">
            <!-- Contact Info -->
            <div>
                <div class="uk-card" style="margin-bottom: 2rem;">
                    <h3 style="color: var(--uk-primary); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Ipoh Office
                    </h3>
                    <p style="color: var(--uk-text-muted); font-size: 0.875rem;">
                        29, Jalan Sultan Nazrin Shah,<br />
                        30250 Ipoh, Perak.<br />
                        <strong>T:</strong> 05-255 5599
                    </p>
                </div>

                <div class="uk-card" style="margin-bottom: 2rem;">
                    <h3 style="color: var(--uk-primary); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        KL Office
                    </h3>
                    <p style="color: var(--uk-text-muted); font-size: 0.875rem;">
                        Unit 7-02, VIDA Bukit Ceylon,<br />
                        1D, Jalan Ceylon,<br />
                        50200 Kuala Lumpur.<br />
                        <strong>T:</strong> 03-2022 2028
                    </p>
                </div>

                <div class="uk-card">
                    <h3 style="color: var(--uk-primary); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        General Enquiries
                    </h3>
                    <p style="color: var(--uk-text-muted); font-size: 0.875rem;">
                        customerservice@unikampar.com.my
                    </p>
                </div>
            </div>

            <!-- Query Form -->
            <div class="uk-card">
                <h2 class="uk-title" style="font-size: 1.5rem; margin-bottom: 2rem;">Send us a Query</h2>
                <form action="submit_query.php" method="POST">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                        <div>
                            <label style="display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--uk-primary);">Name</label>
                            <input type="text" name="name" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--uk-border); border-radius: 4px; font-size: 1rem; outline: none;">
                        </div>
                        <div>
                            <label style="display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--uk-primary);">Email</label>
                            <input type="email" name="email" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--uk-border); border-radius: 4px; font-size: 1rem; outline: none;">
                        </div>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--uk-primary);">Subject</label>
                        <input type="text" name="subject" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--uk-border); border-radius: 4px; font-size: 1rem; outline: none;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; font-size: 0.875rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--uk-primary);">Message</label>
                        <textarea name="message" rows="5" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--uk-border); border-radius: 4px; font-size: 1rem; outline: none; resize: vertical;"></textarea>
                    </div>

                    <!-- CAPTCHA -->
                    <?php include __DIR__ . '/includes/captcha.php'; ?>

                    <button 
                        type="submit" 
                        class="uk-btn uk-btn-primary" 
                        style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.75rem; margin-top: 1.5rem;"
                    >
                        SUBMIT QUERY 
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
