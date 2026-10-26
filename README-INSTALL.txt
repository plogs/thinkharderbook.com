THINK HARDER — WEBSITE INSTALLATION

This package contains the ready-to-serve website, including images.
It works with Apache, nginx, or another static web server. No Node.js,
PHP, database, package installation, or build step is required.

INSTALLATION
1. Extract this ZIP file on your computer or server.
2. Copy index.html, excerpt.html, styles.css, app.js, and the entire
   assets directory into the document root configured for your domain.
   Keep the directory structure intact. index.html should be directly
   inside that document root, not inside another website subdirectory.
3. Make sure the web server can read the files. Directories normally
   use permissions 755 and files 644; retain your server's ownership policy.
4. Open your domain in a browser and test the reading and contact links.

On Debian, you can extract the download with:
    unzip think-harder-website.zip -d think-harder-website

The correct upload destination depends on your server's virtual-host
configuration. A common layout is /var/www/your-domain/public_html,
but use the actual document root configured on your server.

If this is a new domain, configure its DNS, Apache/nginx virtual host,
and HTTPS certificate separately. An existing configured website only
needs the static files placed in its document root. Back up an existing
website before replacing its files.

FILES
index.html                 Book landing page
excerpt.html               Manuscript reading selections
styles.css                 Responsive styles
app.js                     Reading-navigation enhancement
assets/cover.webp          Book cover
assets/steve-isaacson.webp  Author portrait
assets/favicon.svg         Site icon

NOTES
- The exported site contains no ChatGPT login requirement. Visibility
  is controlled entirely by your server configuration.
- Links and assets use relative paths, so no source-code edits are needed
  to serve the pages at a different domain.
- This export omits the hosted copy's domain-specific Open Graph URL and
  image metadata. You can add og:url and an absolute og:image URL in
  index.html after selecting your domain.
- Google Fonts supplies the typefaces. System fonts are used if Google
  Fonts is unavailable. The website otherwise serves its own assets.
- Contact links open an email to contact@steveisaacson.com.
- No retail purchase link or email signup backend has been configured.

EDITING
Edit the HTML/CSS files directly, then upload the changed files.
Copyright 2026 Steve Isaacson.
