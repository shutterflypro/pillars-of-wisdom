# How to Deploy the Pillars of Wisdom Website to cPanel

This guide will walk you through deploying your website to a standard shared hosting server that uses cPanel. No technical experience is required — just follow each step carefully.

---

## Table of Contents

1. [What You Will Need](#1-what-you-will-need)
2. [Step 1: Build the Website on Your Computer](#2-step-1-build-the-website-on-your-computer)
3. [Step 2: Log Into cPanel](#3-step-2-log-into-cpanel)
4. [Step 3: Upload the Website Files](#4-step-3-upload-the-website-files)
5. [Step 4: Configure the Server (Optional but Recommended)](#5-step-4-configure-the-server-optional-but-recommended)
6. [Step 5: Test Your Website](#6-step-5-test-your-website)
7. [Troubleshooting](#7-troubleshooting)
8. [Updating Your Website Later](#8-updating-your-website-later)

---

## 1. What You Will Need

Before you begin, make sure you have the following:

- **Your website source code** — The project folder containing all the files (the same folder that has `package.json`, `src/`, `public/`, etc.)
- **Node.js installed on your computer** — This is required to build the website. If you do not have it, download it from [nodejs.org](https://nodejs.org) and install the LTS (Long Term Support) version.
- **Your cPanel login credentials** — Your hosting provider should have given you a URL, username, and password to access cPanel.
- **A domain name** — The web address where your site will live (for example, `www.yourdomain.com`).

---

## 2. Step 1: Build the Website on Your Computer

The website needs to be "built" before it can be uploaded. This process converts the source code into optimized files that any web server can serve.

### 2.1 Open Your Terminal or Command Prompt

- **On Mac:** Press `Cmd + Space`, type `Terminal`, and press Enter.
- **On Windows:** Press `Win + R`, type `cmd`, and press Enter.

### 2.2 Navigate to Your Project Folder

Type the following command, replacing the path with the actual location of your project folder:

```bash
cd "/path/to/your/pillars-website"
```

**Example (Mac):**
```bash
cd "/Users/yourname/Documents/pillars-website"
```

**Example (Windows):**
```bash
cd "C:\Users\yourname\Documents\pillars-website"
```

To confirm you are in the right folder, type `ls` (Mac/Linux) or `dir` (Windows). You should see files like `package.json`, `src/`, and `public/`.

### 2.3 Install Dependencies (First Time Only)

If this is the first time building the project on this computer, run:

```bash
npm install
```

This will download all the tools the project needs. It may take a minute or two. You will see a progress bar and then return to the command prompt when it is done.

### 2.4 Build the Website

Run the following command:

```bash
npm run build
```

You should see output similar to:

```
✓ 2212 modules transformed.
dist/index.html                     0.85 kB
dist/assets/index-xxxxx.css        87.80 kB
dist/assets/index-xxxxx.js      1,382.73 kB
✓ built in 1.10s
```

### 2.5 Locate the Built Files

After the build completes, a new folder called `dist` will appear inside your project folder. This folder contains all the files you need to upload.

Inside `dist/`, you will see:
- `index.html` — The main entry point
- `assets/` — Contains JavaScript and CSS files
- `images/` — Any image files
- `videos/` — Any video files
- `favicon.svg` — The browser tab icon

**This `dist` folder is what you will upload to your server.**

---

## 3. Step 2: Log Into cPanel

### 3.1 Access cPanel

Open your web browser and go to the cPanel URL provided by your hosting company. It usually looks like one of these:

- `https://yourdomain.com/cpanel`
- `https://cpanel.yourdomain.com`
- `https://yourserver.com:2083`

### 3.2 Enter Your Credentials

Enter the username and password provided by your hosting company and click **Log In**.

### 3.3 Find the File Manager

Once you are logged in, look for an icon labeled **File Manager** and click it. It is usually in the "Files" section of the cPanel home screen.

---

## 4. Step 3: Upload the Website Files

### 4.1 Navigate to the Correct Directory

In the File Manager, you will see a list of folders on the left side. Click on **public_html**. This is the folder that serves files to visitors when they type your domain name into their browser.

**Important:** If `public_html` already contains files (like a default "Coming Soon" page or an `index.html` file), you should either delete them or move them to a backup folder. You can create a folder called `old-site` and drag the existing files into it.

### 4.2 Prepare the Files for Upload

There are two ways to upload:

#### Option A: Upload Individual Files (Easier for Small Sites)

1. On your computer, open the `dist` folder that was created during the build.
2. Select all files and folders inside `dist/` (press `Cmd + A` on Mac or `Ctrl + A` on Windows).
3. Right-click and choose **Compress** (Mac) or **Send to > Compressed (zipped) folder** (Windows).
4. This will create a file called `dist.zip` (or similar).

#### Option B: Use the Command Line (Faster)

If you are comfortable with the terminal, you can create the zip file directly:

```bash
cd dist
zip -r ../website-upload.zip .
cd ..
```

This creates a file called `website-upload.zip` in your project folder.

### 4.3 Upload the Zip File

1. In the cPanel File Manager, make sure you are inside `public_html`.
2. Click the **Upload** button in the top toolbar.
3. A new page will open. Drag your `website-upload.zip` file onto the upload area, or click **Select File** and browse to it.
4. Wait for the upload to complete. You will see a green progress bar.
5. Click **Go Back to "public_html"'** at the bottom of the page.

### 4.4 Extract the Zip File

1. You should now see `website-upload.zip` in your `public_html` folder.
2. Right-click on it and select **Extract**.
3. A dialog will ask where to extract. Make sure the path is `/public_html` and click **Extract Files**.
4. Click **Close** when done.

### 4.5 Verify the Files

Your `public_html` folder should now contain:

```
public_html/
├── index.html
├── favicon.svg
├── icons.svg
├── assets/
│   ├── index-xxxxx.css
│   └── index-xxxxx.js
├── images/
│   ├── logo2.png
│   └── west-palm-beach.webp
└── videos/
    ├── pillars-1080-original.mp4
    ├── pillars.mp4
    └── pillars.webm
```

### 4.6 Delete the Zip File

Once you have confirmed the files are extracted correctly, right-click on `website-upload.zip` and select **Delete**. This frees up space on your server.

---

## 5. Step 4: Configure the Server (Optional but Recommended)

### 5.1 Set Up the .htaccess File for React Router

This website uses React Router, which means the URLs look like `/platform`, `/contact`, `/mortgage-operations`, etc. Without proper configuration, visitors who go directly to these pages will see a "404 Not Found" error.

To fix this, you need to create an `.htaccess` file:

1. In the cPanel File Manager, make sure you are in `public_html`.
2. Click **+ File** in the top toolbar (or right-click in the empty space and select **New File**).
3. Name the file `.htaccess` (note the dot at the beginning).
4. If you get a warning about hidden files, click **Create**.
5. Right-click on `.htaccess` and select **Edit**.
6. Click **Edit** again in the dialog that appears.
7. Paste the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

8. Click **Save Changes** in the top right corner.
9. Close the editor.

**What this does:** When a visitor goes to any page on your site (like `/contact`), the server will serve `index.html`, and React Router will handle showing the correct page. If the visitor requests an actual file (like an image or CSS file), the server will serve that file directly.

### 5.2 Enable HTTPS (If Not Already Enabled)

Most modern hosting providers include free SSL certificates through Let's Encrypt. To enable HTTPS:

1. Go back to the cPanel home screen (click the back arrow or the cPanel logo).
2. Look for **SSL/TLS Status** or **Let's Encrypt SSL**.
3. Find your domain in the list and click **Run AutoSSL** or **Issue** next to it.
4. Wait a few minutes for the certificate to be installed.
5. Once installed, your site will be accessible at `https://yourdomain.com`.

### 5.3 Set Up a Redirect from HTTP to HTTPS (Recommended)

To ensure all visitors use the secure HTTPS version:

1. Go back to the File Manager and open `public_html`.
2. Right-click on `.htaccess` and select **Edit**.
3. Add the following lines at the very top of the file, before the existing content:

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

4. The complete file should look like this:

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

5. Click **Save Changes** and close the editor.

---

## 6. Step 5: Test Your Website

### 6.1 Visit Your Site

Open your web browser and go to your domain:

```
https://yourdomain.com
```

You should see the Pillars of Wisdom homepage with the navigation bar, hero section, and content.

### 6.2 Test Internal Navigation

Click on several links in the navigation menu:

- **Platform** — Should navigate to the platform page
- **Modules** — Should navigate to the modules page
- **Industries** — Should navigate to the industries page
- **Contact** — Should navigate to the contact page

### 6.3 Test Direct URL Access

Type a direct URL into your browser address bar, such as:

```
https://yourdomain.com/mortgage-operations
https://yourdomain.com/loan-intake
https://yourdomain.com/contact
```

Each page should load correctly without a 404 error. If you see a 404, double-check that the `.htaccess` file was created correctly in Step 5.1.

### 6.4 Test on Mobile

Open your site on a phone or tablet to make sure it looks good on smaller screens. You can also test this on your computer by resizing your browser window to a narrow width.

---

## 7. Troubleshooting

### Problem: I see a blank white page

**Cause:** The JavaScript or CSS files are not loading correctly.

**Solution:**
1. Check that the `assets/` folder was uploaded to `public_html`.
2. Open your browser's developer tools (press `F12` or `Cmd + Option + I` on Mac) and look at the **Console** tab for error messages.
3. If you see errors about missing files, re-upload the `dist` folder contents.

### Problem: I see a 404 error when I go to a page directly

**Cause:** The `.htaccess` file is missing or incorrect.

**Solution:**
1. Go to the cPanel File Manager and open `public_html`.
2. Make sure a file named `.htaccess` exists.
3. If it does not exist, create it following the instructions in Step 5.1.
4. If it exists, open it and verify the content matches the example in Step 5.1.

### Problem: The site looks broken or styles are missing

**Cause:** The CSS file path is incorrect.

**Solution:**
1. Open `index.html` in the cPanel File Manager (right-click > Edit).
2. Look for a line that references a `.css` file. It should look like:
   ```html
   <script type="module" crossorigin src="/assets/index-xxxxx.js"></script>
   <link rel="stylesheet" crossorigin href="/assets/index-xxxxx.css">
   ```
3. Make sure the file referenced actually exists in the `assets/` folder.
4. If the files do not match, rebuild the website locally and re-upload the `dist` folder.

### Problem: Videos are not playing

**Cause:** Video files are large and may not have uploaded completely, or the server does not support the file type.

**Solution:**
1. Check that the `videos/` folder exists in `public_html` and contains the video files.
2. Verify the file sizes match what is on your computer.
3. If files are missing or corrupted, re-upload them individually.

### Problem: I get a "500 Internal Server Error"

**Cause:** There is a syntax error in the `.htaccess` file.

**Solution:**
1. Open `.htaccess` in the cPanel File Manager.
2. Check for any typos or extra characters.
3. Replace the entire content with the correct example from Step 5.1.
4. Save and test again.

---

## 8. Updating Your Website Later

Whenever you make changes to the website code, follow these steps to update the live site:

### 8.1 Rebuild the Website

On your computer, navigate to the project folder and run:

```bash
npm run build
```

### 8.2 Create a New Zip File

```bash
cd dist
zip -r ../website-update.zip .
cd ..
```

### 8.3 Upload and Replace

1. Log into cPanel and open the File Manager.
2. Navigate to `public_html`.
3. Upload `website-update.zip`.
4. Before extracting, **delete the existing files** (except `.htaccess`):
   - Delete `index.html`
   - Delete the `assets/` folder
   - Delete `favicon.svg` and `icons.svg`
   - Delete `images/` and `videos/` folders (unless you have custom files there)
5. Extract `website-update.zip`.
6. Delete `website-update.zip`.
7. Test your site.

**Note:** Always keep a backup before deleting files. You can rename the existing `public_html` folder to `public_html-backup` before uploading new files, then delete the backup once you confirm everything works.

---

## Quick Reference Checklist

- [ ] Node.js installed on your computer
- [ ] `npm install` completed successfully
- [ ] `npm run build` completed successfully
- [ ] `dist/` folder created with all files
- [ ] `dist/` contents zipped into a single file
- [ ] Logged into cPanel
- [ ] Navigated to `public_html`
- [ ] Old files removed or backed up
- [ ] Zip file uploaded
- [ ] Zip file extracted
- [ ] `.htaccess` file created with correct content
- [ ] HTTPS enabled
- [ ] Site tested at your domain
- [ ] Internal links tested
- [ ] Direct URL access tested
- [ ] Mobile view tested
