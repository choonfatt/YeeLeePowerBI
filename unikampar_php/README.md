# Unikampar PHP Website Clone - Deployment Guide

This project is a standalone PHP version of the Unikampar Credit & Leasing website clone, designed for deployment on cPanel hosting servers.

## Folder Structure
- `index.php`: Home page
- `about.php`: About Us page
- `services.php`: Services page
- `contact.php`: Contact page with Query Form
- `submit_query.php`: Form submission handler
- `includes/`: Shared components (Header, Footer, Captcha)
- `assets/`: 
    - `css/`: Styling
    - `images/`: High-fidelity assets

## How to Deploy to cPanel

1. **Upload Files**:
   - Access your cPanel and open **File Manager**.
   - Navigate to the `public_html` directory (or a subdirectory where you want the site to live).
   - Upload all the contents of the `unikampar_php/` folder.

2. **Set PHP Version**:
   - Ensure your server is running **PHP 7.4 or higher**. You can check this in the "MultiPHP Manager" section of cPanel.

3. **Verify Sessions**:
   - The CAPTCHA feature relies on PHP Sessions. Ensure that local session storage is enabled on your server (this is standard for 99% of cPanel hosts).

4. **Enable Email (Optional)**:
   - If you want the contact form to actually send emails to your inbox, open `submit_query.php` and uncomment the `mail()` function section.
   - Replace the `to` email address with your actual email.

## Key Features
- **Responsive Design**: Works on Desktop, Tablet, and Mobile.
- **Secure Form**: Integrated math-based CAPTCHA to prevent spam.
- **Lightweight**: No heavy frameworks; pure PHP/HTML/CSS for maximum speed.
