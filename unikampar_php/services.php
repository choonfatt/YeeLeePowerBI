<?php 
if (session_status() == PHP_SESSION_NONE) { session_start(); }
include __DIR__ . '/includes/header.php'; 
?>

<section class="uk-section" style="background: var(--uk-bg-light); padding: 6rem 0;">
    <div class="uk-container">
        <h1 class="uk-title" style="text-align: center;">Our Services</h1>
        <p class="uk-subtitle" style="text-align: center; max-width: 800px; margin: 0 auto 4rem;">
            Explore a comprehensive range of hire purchase services tailored to your diverse financial needs.
        </p>
        
        <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;">
            <!-- Private Vehicles -->
            <div class="uk-card" style="display: flex; gap: 2rem; align-items: flex-start;">
                <div style="background: var(--uk-primary); color: var(--uk-white); padding: 1.5rem; border-radius: 8px;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="22" height="13" rx="2" ry="2"></rect><path d="M7 21h0"></path><path d="M17 21h0"></path><path d="M7 16l-2 5"></path><path d="M17 16l2 5"></path><path d="M2 12h20"></path></svg>
                </div>
                <div>
                    <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--uk-primary); margin-bottom: 1rem;">Private Vehicles</h3>
                    <p style="color: var(--uk-text-muted); font-size: 1rem;">Unlock the road to personal freedom with our hassle-free hire purchase solutions for a wide range of private vehicles, ensuring you drive away with confidence.</p>
                    <a href="contact.php" class="uk-btn" style="padding: 0.5rem 0; color: var(--uk-accent); font-weight: 700; font-size: 0.875rem; margin-top: 1rem; background: none; text-decoration: none;">
                        ENQUIRE NOW →
                    </a>
                </div>
            </div>

            <!-- Bus -->
            <div class="uk-card" style="display: flex; gap: 2rem; align-items: flex-start;">
                <div style="background: var(--uk-primary); color: var(--uk-white); padding: 1.5rem; border-radius: 8px;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2"></path><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="7" cy="18" r="2"></circle><circle cx="17" cy="18" r="2"></circle></svg>
                </div>
                <div>
                    <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--uk-primary); margin-bottom: 1rem;">Bus</h3>
                    <p style="color: var(--uk-text-muted); font-size: 1rem;">Empower your transportation ventures with our flexible hire purchase plans tailored for buses, offering a smooth journey towards efficiency and reliability.</p>
                    <a href="contact.php" class="uk-btn" style="padding: 0.5rem 0; color: var(--uk-accent); font-weight: 700; font-size: 0.875rem; margin-top: 1rem; background: none; text-decoration: none;">
                        ENQUIRE NOW →
                    </a>
                </div>
            </div>

            <!-- Commercial Vehicles -->
            <div class="uk-card" style="display: flex; gap: 2rem; align-items: flex-start;">
                <div style="background: var(--uk-primary); color: var(--uk-white); padding: 1.5rem; border-radius: 8px;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                </div>
                <div>
                    <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--uk-primary); margin-bottom: 1rem;">Commercial Vehicles</h3>
                    <p style="color: var(--uk-text-muted); font-size: 1rem;">Accelerate your business logistics with our tailored hire purchase services for commercial vehicles, including lorries, prime movers, and trailers.</p>
                    <a href="contact.php" class="uk-btn" style="padding: 0.5rem 0; color: var(--uk-accent); font-weight: 700; font-size: 0.875rem; margin-top: 1rem; background: none; text-decoration: none;">
                        ENQUIRE NOW →
                    </a>
                </div>
            </div>

            <!-- Heavy Equipment -->
            <div class="uk-card" style="display: flex; gap: 2rem; align-items: flex-start;">
                <div style="background: var(--uk-primary); color: var(--uk-white); padding: 1.5rem; border-radius: 8px;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18h20"></path><path d="M5 18V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v11"></path><path d="M9 11h6"></path><path d="M9 14h6"></path><path d="M22 22l-2-4"></path><path d="M2 22l2-4"></path></svg>
                </div>
                <div>
                    <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--uk-primary); margin-bottom: 1rem;">Heavy Equipment</h3>
                    <p style="color: var(--uk-text-muted); font-size: 1rem;">Elevate your construction capabilities with our specialized hire purchase solutions for heavy equipment, including excavators, backhoes, and loaders.</p>
                    <a href="contact.php" class="uk-btn" style="padding: 0.5rem 0; color: var(--uk-accent); font-weight: 700; font-size: 0.875rem; margin-top: 1rem; background: none; text-decoration: none;">
                        ENQUIRE NOW →
                    </a>
                </div>
            </div>

            <!-- Machines -->
            <div class="uk-card" style="display: flex; gap: 2rem; align-items: flex-start;">
                <div style="background: var(--uk-primary); color: var(--uk-white); padding: 1.5rem; border-radius: 8px;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </div>
                <div>
                    <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--uk-primary); margin-bottom: 1rem;">Industrial Machines</h3>
                    <p style="color: var(--uk-text-muted); font-size: 1rem;">Revolutionize your industrial landscape with our customized hire purchase services for machines, encompassing CNC, manufacturing, and production equipment.</p>
                    <a href="contact.php" class="uk-btn" style="padding: 0.5rem 0; color: var(--uk-accent); font-weight: 700; font-size: 0.875rem; margin-top: 1rem; background: none; text-decoration: none;">
                        ENQUIRE NOW →
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
