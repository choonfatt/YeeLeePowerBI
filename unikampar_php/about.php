<?php 
if (session_status() == PHP_SESSION_NONE) { session_start(); }
include __DIR__ . '/includes/header.php'; 
?>

<section class="uk-section" style="background: var(--uk-primary); color: var(--uk-white); padding: 8rem 0 4rem;">
    <div class="uk-container">
        <h1 class="uk-title" style="color: var(--uk-white); text-align: center;">About Unikampar</h1>
        <p class="uk-subtitle" style="color: rgba(255,255,255,0.8); text-align: center; max-width: 800px; margin: 0 auto;">
            A legacy of trust and financial empowerment since 1980.
        </p>
    </div>
</section>

<section class="uk-section">
    <div class="uk-container">
        <div class="uk-grid">
            <div class="uk-card">
                <div style="color: var(--uk-accent); margin-bottom: 1rem;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
                <h2 class="uk-title" style="font-size: 1.75rem;">VISION</h2>
                <p style="color: var(--uk-text-muted);">
                    At Unikampar, we envision being the epitome of a trustworthy financial partner, recognized for our reliability and commitment to delivering innovative financial solutions that meet the evolving needs of our clients.
                </p>
            </div>
            
            <div class="uk-card">
                <div style="color: var(--uk-accent); margin-bottom: 1rem;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                </div>
                <h2 class="uk-title" style="font-size: 1.75rem;">MISSION</h2>
                <ul style="padding-left: 1.25rem; color: var(--uk-text-muted);">
                    <li style="margin-bottom: 1rem;">
                        <strong>Accessible and Fair Credit Facilities:</strong> We are dedicated to offer credit facilities that are not only accessible but also fair, promoting financial inclusion for all.
                    </li>
                    <li style="margin-bottom: 1rem;">
                        <strong>Diligent Support:</strong> Our mission includes providing diligent support to ensure the success of our clients in their financial endeavors.
                    </li>
                    <li>
                        <strong>Customer Satisfaction:</strong> Prioritizing customer satisfaction is at the core of our mission, fostering lasting and meaningful relationships.
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="uk-section uk-section-alt">
    <div class="uk-container">
        <div style="text-align: center; margin-bottom: 4rem;">
            <h2 class="uk-title">What Sets Us Apart</h2>
        </div>
        
        <div class="uk-grid" style="gridTemplateColumns: repeat(3, 1fr);">
            <div style="text-align: center;">
                <div style="font-size: 2.5rem; font-weight: 800; color: var(--uk-accent); margin-bottom: 0.5rem;">40+</div>
                <h4 style="color: var(--uk-primary); margin-bottom: 1rem;">YEARS EXPERIENCE</h4>
                <p style="font-size: 0.875rem; color: var(--uk-text-muted);">Decades of expertise in the Malaysian financial landscape.</p>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 2.5rem; font-weight: 800; color: var(--uk-accent); margin-bottom: 0.5rem;">Fast</div>
                <h4 style="color: var(--uk-primary); margin-bottom: 1rem;">APPROVAL</h4>
                <p style="font-size: 0.875rem; color: var(--uk-text-muted);">Quick and efficient processing of your credit applications.</p>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 2.5rem; font-weight: 800; color: var(--uk-accent); margin-bottom: 0.5rem;">Loyal</div>
                <h4 style="color: var(--uk-primary); margin-bottom: 1rem;">SERVICE</h4>
                <p style="font-size: 0.875rem; color: var(--uk-text-muted);">Dedicated support team to guide your financial journey.</p>
            </div>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
