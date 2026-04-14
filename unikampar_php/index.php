<?php 
if (session_status() == PHP_SESSION_NONE) { session_start(); }
include __DIR__ . '/includes/header.php'; 
?>

<section class="uk-hero">
    <img src="assets/images/hero.png" alt="Hero Background" class="uk-hero-bg">
    <div class="uk-hero-overlay"></div>
    <div class="uk-container" style="position: relative; z-index: 2;">
        <div class="uk-hero-content">
            <h1 class="uk-title" style="color: var(--uk-white); font-size: 3.5rem; margin-bottom: 1rem;">
                Your Financial Needs, Our Priority.
            </h1>
            <p class="uk-subtitle" style="color: rgba(255,255,255,0.9); margin-bottom: 2.5rem;">
                Experience excellence in financial services with Unikampar Credit and Leasing. Providing trusted credit facilities since 1980.
            </p>
            <div style="display: flex; gap: 1rem;">
                <a href="contact.php" class="uk-btn uk-btn-accent">GET STARTED</a>
                <a href="services.php" class="uk-btn" style="border: 2px solid var(--uk-white); color: var(--uk-white);">OUR SERVICES</a>
            </div>
        </div>
    </div>
</section>

<section class="uk-section">
    <div class="uk-container">
        <div style="text-align: center; margin-bottom: 4rem;">
            <h2 class="uk-title">Why Choose Us</h2>
            <p class="uk-subtitle">Benefiting from more than four decades of expertise, we guarantee superior guidance.</p>
        </div>
        
        <div class="uk-grid">
            <div style="text-align: center; padding: 1rem;">
                <div style="background: var(--uk-bg-light); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--uk-primary);">
                    <!-- Simple SVG icon for Integrity -->
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h3 style="margin-bottom: 1rem; color: var(--uk-primary);">INTEGRITY</h3>
                <p style="color: var(--uk-text-muted);">We stand as a beacon of trust, ensuring reliability in every financial interaction.</p>
            </div>
            
            <div style="text-align: center; padding: 1rem;">
                <div style="background: var(--uk-bg-light); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--uk-primary);">
                    <!-- Simple SVG icon for Clock -->
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3 style="margin-bottom: 1rem; color: var(--uk-primary);">SPEED</h3>
                <p style="color: var(--uk-text-muted);">Experience time-effective solutions with quick approvals for businesses and individuals.</p>
            </div>
            
            <div style="text-align: center; padding: 1rem;">
                <div style="background: var(--uk-bg-light); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--uk-primary);">
                    <!-- Simple SVG icon for Users -->
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 style="margin-bottom: 1rem; color: var(--uk-primary);">EXPERT TEAM</h3>
                <p style="color: var(--uk-text-muted);">Benefit from our profound expertise and commitment to your financial success.</p>
            </div>
        </div>
    </div>
</section>

<section class="uk-section uk-section-alt">
    <div class="uk-container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3rem;">
            <div>
                <h2 class="uk-title">Our Services</h2>
                <p class="uk-subtitle" style="margin: 0;">Comprehensive range of hire purchase services tailored to your needs.</p>
            </div>
            <a href="services.php" class="uk-btn uk-btn-primary">VIEW ALL SERVICES</a>
        </div>
        
        <div class="uk-grid">
            <div class="uk-card">
                <div style="height: 200px; overflow: hidden; border-radius: 4px; margin-bottom: 1.5rem;">
                    <img src="assets/images/private_vehicle.png" alt="Private Vehicles" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--uk-primary); margin-bottom: 1rem;">Private Vehicles</h3>
                <p style="color: var(--uk-text-muted); font-size: 0.925rem; margin-bottom: 1.5rem;">
                    Unlock the road to personal freedom with our hassle-free hire purchase solutions for a wide range of private vehicles.
                </p>
                <a href="services.php" class="uk-btn uk-btn-primary">Learn More</a>
            </div>
            
            <div class="uk-card">
                <div style="height: 200px; overflow: hidden; border-radius: 4px; margin-bottom: 1.5rem;">
                    <img src="assets/images/heavy_equipment.png" alt="Heavy Equipment" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--uk-primary); margin-bottom: 1rem;">Heavy Equipment</h3>
                <p style="color: var(--uk-text-muted); font-size: 0.925rem; margin-bottom: 1.5rem;">
                    Elevate your construction capabilities with specialized solutions for excavators, backhoes, and loaders.
                </p>
                <a href="services.php" class="uk-btn uk-btn-primary">Learn More</a>
            </div>
            
            <div class="uk-card">
                <div style="height: 200px; overflow: hidden; border-radius: 4px; margin-bottom: 1.5rem;">
                    <img src="assets/images/industrial_machine.png" alt="Industrial Machines" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--uk-primary); margin-bottom: 1rem;">Industrial Machines</h3>
                <p style="color: var(--uk-text-muted); font-size: 0.925rem; margin-bottom: 1.5rem;">
                    Revolutionize your landscape with customized services for CNC, manufacturing, and production equipment.
                </p>
                <a href="services.php" class="uk-btn uk-btn-primary">Learn More</a>
            </div>
        </div>
    </div>
</section>

<section class="uk-section" style="background: var(--uk-primary); color: var(--uk-white); text-align: center;">
    <div class="uk-container">
        <h2 class="uk-title" style="color: var(--uk-white);">Find out What Sets Us Apart</h2>
        <p class="uk-subtitle" style="color: rgba(255,255,255,0.8);">Join thousands of satisfied customers who trust Unikampar for their financial growth.</p>
        <a href="contact.php" class="uk-btn uk-btn-accent">CONTACT US TODAY</a>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
