# How to Deploy the Pillars of Wisdom Website to AWS

This guide will walk you through deploying your website to Amazon Web Services (AWS). We will use **Amazon S3** for hosting the website files and **Amazon CloudFront** for fast, secure global delivery. No prior AWS experience is required — follow each step carefully.

---

## Table of Contents

1. [What You Will Need](#1-what-you-will-need)
2. [Architecture Overview](#2-architecture-overview)
3. [Step 1: Build the Website on Your Computer](#3-step-1-build-the-website-on-your-computer)
4. [Step 2: Create an AWS Account](#4-step-2-create-an-aws-account)
5. [Step 3: Create an S3 Bucket](#5-step-3-create-an-s3-bucket)
6. [Step 4: Upload the Website Files to S3](#6-step-4-upload-the-website-files-to-s3)
7. [Step 5: Configure the S3 Bucket for Website Hosting](#7-step-5-configure-the-s3-bucket-for-website-hosting)
8. [Step 6: Create a CloudFront Distribution](#8-step-6-create-a-cloudfront-distribution)
9. [Step 7: Connect Your Custom Domain (Optional)](#9-step-7-connect-your-custom-domain-optional)
10. [Step 8: Test Your Website](#10-step-8-test-your-website)
11. [Troubleshooting](#11-troubleshooting)
12. [Updating Your Website Later](#12-updating-your-website-later)
13. [Cost Estimate](#13-cost-estimate)

---

## 1. What You Will Need

Before you begin, make sure you have the following:

- **Your website source code** — The project folder containing all the files.
- **Node.js installed on your computer** — Download from [nodejs.org](https://nodejs.org). Install the LTS version.
- **An AWS account** — You can create one at [aws.amazon.com](https://aws.amazon.com). A credit card is required, but the free tier covers most small websites.
- **A custom domain name (optional)** — If you want to use your own domain (like `www.yourdomain.com`), you will need to have one registered. You can register one through AWS Route 53 or any domain registrar.

---

## 2. Architecture Overview

Here is how your website will be hosted on AWS:

```
Visitor → CloudFront (CDN + HTTPS) → S3 Bucket (Website Files)
```

- **Amazon S3** stores your website files (HTML, CSS, JavaScript, images, videos).
- **Amazon CloudFront** is a Content Delivery Network (CDN) that caches your site at locations around the world for fast loading. It also provides free HTTPS.
- **Route 53** (optional) manages your custom domain name and points it to CloudFront.

This setup is highly reliable, fast, and very cost-effective for static websites.

---

## 3. Step 1: Build the Website on Your Computer

### 3.1 Open Your Terminal or Command Prompt

- **On Mac:** Press `Cmd + Space`, type `Terminal`, and press Enter.
- **On Windows:** Press `Win + R`, type `cmd`, and press Enter.

### 3.2 Navigate to Your Project Folder

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

### 3.3 Install Dependencies (First Time Only)

```bash
npm install
```

### 3.4 Build the Website

```bash
npm run build
```

You should see output confirming the build completed successfully. A `dist/` folder will be created inside your project folder.

### 3.5 Verify the Build

Open the `dist/` folder and confirm it contains:

```
dist/
├── index.html
├── favicon.svg
├── icons.svg
├── assets/
│   ├── index-xxxxx.css
│   └── index-xxxxx.js
├── images/
└── videos/
```

---

## 4. Step 2: Create an AWS Account

If you do not already have an AWS account:

1. Go to [https://aws.amazon.com](https://aws.amazon.com) and click **Create an AWS Account**.
2. Enter your email address, choose a password, and pick an AWS account name.
3. Choose the **Basic Support — Free** plan.
4. Enter your payment information (a credit or debit card).
5. Verify your identity with a phone call or text message.
6. Complete the registration.

Once your account is active, log in to the [AWS Console](https://console.aws.amazon.com).

---

## 5. Step 3: Create an S3 Bucket

### 5.1 Open the S3 Console

1. In the AWS Console, click the search bar at the top and type **S3**.
2. Click on **S3** in the search results. This opens the S3 dashboard.

### 5.2 Create the Bucket

1. Click the orange **Create bucket** button.
2. Fill in the following settings:

| Setting | Value |
|---|---|
| **Bucket name** | Choose a unique name, such as `yourdomain-website` (must be globally unique — no two S3 buckets in the world can have the same name) |
| **AWS Region** | Choose the region closest to your audience (e.g., US East (N. Virginia) us-east-1) |

3. Under **Object Ownership**, select **ACLs disabled** (recommended).
4. Under **Block Public Access settings for this bucket**, **uncheck** the box that says **Block all public access**. A warning will appear — check the box acknowledging it. This is necessary so visitors can access your website.
5. Leave **Bucket Versioning** disabled.
6. Leave **Tags** empty.
7. Leave **Default encryption** as is (AES-256 is fine).
8. Click **Create bucket** at the bottom.

### 5.3 Confirm the Bucket Was Created

You should see your new bucket listed on the S3 dashboard. Click on its name to open it. It will be empty for now.

---

## 6. Step 4: Upload the Website Files to S3

### 6.1 Open the Bucket

Click on your bucket name in the S3 dashboard to open it.

### 6.2 Upload Files

1. Click the orange **Upload** button.
2. A new page will open. Click **Add files** and navigate to your `dist/` folder on your computer.
3. Select **all files and folders** inside the `dist/` folder (not the `dist/` folder itself).
   - You should be selecting: `index.html`, `favicon.svg`, `icons.svg`, `assets/`, `images/`, `videos/`
4. Click **Open**. The files will appear in the upload list.
5. Scroll to the bottom of the page and click **Upload**.
6. Wait for the upload to complete. You will see a success message.
7. Click **Exit** to return to your bucket.

### 6.3 Verify the Upload

You should see the following in your bucket:

```
assets/
images/
videos/
favicon.svg
icons.svg
index.html
```

---

## 7. Step 5: Configure the S3 Bucket for Website Hosting

### 7.1 Enable Static Website Hosting

1. In your bucket, click the **Properties** tab near the top.
2. Scroll down to the **Static website hosting** section.
3. Click **Edit**.
4. Select **Enable**.
5. Set the following:

| Setting | Value |
|---|---|
| **Index document** | `index.html` |
| **Error document** | `index.html` |

**Important:** Setting the error document to `index.html` is critical for React Router to work. When a visitor goes to a page like `/contact`, S3 will serve `index.html`, and React Router will display the correct page.

6. Click **Save changes**.

### 7.2 Set the Bucket Policy

1. Click the **Permissions** tab near the top.
2. Scroll down to the **Bucket policy** section.
3. Click **Edit**.
4. Paste the following policy, replacing `your-bucket-name` with your actual bucket name:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

**Example:** If your bucket is named `pillars-of-wisdom-website`, the Resource line should be:
```json
"Resource": "arn:aws:s3:::pillars-of-wisdom-website/*"
```

5. Click **Save changes**.

### 7.3 Note Your Website Endpoint

After saving, go back to the **Properties** tab and scroll to **Static website hosting**. You will see a **Bucket website endpoint** URL that looks like:

```
http://your-bucket-name.s3-website-us-east-1.amazonaws.com
```

Copy this URL. You will need it in the next step.

---

## 8. Step 6: Create a CloudFront Distribution

CloudFront provides HTTPS, global caching, and better performance. It also handles React Router URLs properly.

### 8.1 Open the CloudFront Console

1. In the AWS Console, search for **CloudFront** and click on it.
2. Click **Create distribution**.

### 8.2 Configure the Distribution

Fill in the following settings:

| Setting | Value |
|---|---|
| **Origin domain** | Select your S3 bucket from the dropdown. **Important:** Choose the S3 website endpoint (the one ending in `.s3-website-us-east-1.amazonaws.com`), NOT the S3 bucket URL. |
| **Origin path** | Leave blank |
| **Name** | Auto-filled from the origin domain |
| **Origin access** | Select **Origin access control settings (recommended)** |
| **Viewer protocol policy** | Select **Redirect HTTP to HTTPS** |
| **Allowed HTTP methods** | Select **GET, HEAD** (default) |
| **Cache policy** | Select **CachingOptimized** |
| **Origin request policy** | Select **None** |
| **Response headers policy** | Select **None** |
| **Alternate domain name (CNAME)** | Leave blank for now (we will add this in Step 9 if you have a custom domain) |
| **Custom SSL certificate** | Leave as default (CloudFront provides a free certificate) |
| **Default root object** | `index.html` |
| **Price class** | Select **Use all edge locations (best performance)** or **Use only US, Canada, and Europe** (lower cost) |

### 8.3 Configure Error Pages (Critical for React Router)

This is the most important step for making React Router work with CloudFront.

1. After creating the distribution, click on its **ID** to open the details page.
2. Click the **Error pages** tab.
3. Click **Create custom error response**.
4. Fill in the following:

| Setting | Value |
|---|---|
| **HTTP error code** | `404: Not Found` |
| **Error caching minimum TTL** | `0` |
| **Customize error response** | Yes |
| **Response page path** | `/index.html` |
| **HTTP response code** | `200: OK` |

5. Click **Create custom error response**.
6. Click **Create custom error response** again.
7. Fill in the following:

| Setting | Value |
|---|---|
| **HTTP error code** | `403: Forbidden` |
| **Error caching minimum TTL** | `0` |
| **Customize error response** | Yes |
| **Response page path** | `/index.html` |
| **HTTP response code** | `200: OK` |

8. Click **Create custom error response**.

**What this does:** When a visitor goes to `/contact` or any other React Router page, CloudFront will not find a file at that path in S3. Instead of showing a 404 error, it will serve `index.html`, and React Router will display the correct page.

### 8.4 Wait for the Distribution to Deploy

CloudFront distributions take about 10-20 minutes to deploy. You will see the status as **In Progress** and then change to **Deployed**.

### 8.5 Note Your CloudFront Domain Name

Once deployed, you will see a **Distribution domain name** that looks like:

```
d1a2b3c4d5e6f7.cloudfront.net
```

This is the URL where your website is now live. Copy it for testing.

---

## 9. Step 7: Connect Your Custom Domain (Optional)

If you want visitors to access your site at `www.yourdomain.com` instead of the CloudFront URL, follow these steps.

### 9.1 If Your Domain Is Registered with AWS Route 53

1. In the AWS Console, search for **Route 53** and click on it.
2. Click **Hosted zones** in the left menu.
3. Click on your domain name.
4. Click **Create record**.
5. Fill in the following:

| Setting | Value |
|---|---|
| **Record name** | Leave blank for the root domain, or enter `www` for the www subdomain |
| **Record type** | `A` |
| **Alias** | Toggle **On** |
| **Route traffic to** | Select **Alias to CloudFront distribution** |
| **Choose CloudFront distribution** | Select your distribution from the dropdown |

6. Click **Create records**.

### 9.2 If Your Domain Is Registered Elsewhere (GoDaddy, Namecheap, etc.)

1. Log in to your domain registrar's website.
2. Find the DNS management or DNS settings for your domain.
3. Create a **CNAME record**:

| Setting | Value |
|---|---|
| **Type** | `CNAME` |
| **Name/Host** | `www` |
| **Value/Points to** | Your CloudFront domain name (e.g., `d1a2b3c4d5e6f7.cloudfront.net`) |
| **TTL** | `3600` (or default) |

4. If you want the root domain (without `www`) to work, you may need to set up a redirect or use a service like Cloudflare. Many registrars offer a "URL redirect" or "forwarding" feature that can point `yourdomain.com` to `www.yourdomain.com`.

### 9.3 Add Your Custom Domain to CloudFront

1. Go back to the CloudFront console and click on your distribution.
2. Click the **Settings** tab.
3. Click **Edit**.
4. Under **Alternate domain name (CNAME)**, enter your domain (e.g., `www.yourdomain.com`).
5. Under **Custom SSL certificate**, select **Request or import a certificate with ACM**.
6. Click **Request certificate** — this will open AWS Certificate Manager (ACM) in a new tab.
7. In ACM, click **Request a certificate**.
8. Select **Request a public certificate** and click **Next**.
9. Enter your domain name (e.g., `www.yourdomain.com`) and click **Next**.
10. Choose **DNS validation** and click **Request**.
11. Once the certificate is issued (this may take a few minutes), go back to CloudFront and select it from the dropdown.
12. Click **Save changes**.

### 9.4 Wait for DNS Propagation

DNS changes can take anywhere from a few minutes to 48 hours to take effect worldwide. You can check the status at [https://dnschecker.org](https://dnschecker.org).

---

## 10. Step 8: Test Your Website

### 10.1 Visit Your Site

Open your web browser and go to your CloudFront URL or custom domain:

```
https://d1a2b3c4d5e6f7.cloudfront.net
```

or

```
https://www.yourdomain.com
```

You should see the Pillars of Wisdom homepage.

### 10.2 Test Internal Navigation

Click on several links in the navigation menu:

- **Platform**
- **Modules**
- **Industries**
- **Contact**
- **Mortgage Operations**

### 10.3 Test Direct URL Access

Type direct URLs into your browser:

```
https://your-domain.com/mortgage-operations
https://your-domain.com/loan-intake
https://your-domain.com/underwriting
https://your-domain.com/contact
```

Each page should load correctly. If you see a 404 error, double-check the error page configuration in Step 8.3.

### 10.4 Test HTTPS

Make sure the URL starts with `https://` and that you see a padlock icon in your browser's address bar.

### 10.5 Test on Mobile

Open your site on a phone or tablet, or resize your browser window to test the responsive design.

---

## 11. Troubleshooting

### Problem: I see "Access Denied" when I visit the site

**Cause:** The bucket policy is incorrect or the bucket is still blocking public access.

**Solution:**
1. Go to the S3 console and open your bucket.
2. Click the **Permissions** tab.
3. Verify the bucket policy matches the example in Step 7.2.
4. Make sure the bucket name in the policy matches your actual bucket name.
5. Click **Permissions** and verify that **Block public access** is turned off.

### Problem: I see a 404 error when I go to a page directly

**Cause:** The CloudFront error pages are not configured correctly.

**Solution:**
1. Go to the CloudFront console and click on your distribution.
2. Click the **Error pages** tab.
3. Verify that both 404 and 403 error responses are configured to return `/index.html` with a 200 status code.
4. If you made changes, wait a few minutes for CloudFront to update.

### Problem: The site looks broken or styles are missing

**Cause:** The CSS or JavaScript files are not being loaded.

**Solution:**
1. Open your browser's developer tools (press `F12`) and check the **Console** and **Network** tabs for errors.
2. Verify that the `assets/` folder was uploaded to S3 and contains the CSS and JS files.
3. Check that the file names in `index.html` match the actual files in the `assets/` folder.
4. If files are missing, rebuild locally and re-upload.

### Problem: Changes I made are not showing up

**Cause:** CloudFront is caching the old files.

**Solution:**
1. Go to the CloudFront console and click on your distribution.
2. Click the **Invalidations** tab.
3. Click **Create invalidation**.
4. In the **Object paths** field, enter `/*` (this invalidates all files).
5. Click **Create invalidation**.
6. Wait a few minutes for the invalidation to complete.
7. Refresh your browser.

### Problem: My custom domain is not working

**Cause:** DNS has not propagated or the CloudFront distribution is not configured with the alternate domain name.

**Solution:**
1. Check DNS propagation at [https://dnschecker.org](https://dnschecker.org).
2. Verify that the CNAME record points to your CloudFront domain name.
3. In the CloudFront console, verify that your domain is listed under **Alternate domain names (CNAMEs)**.
4. Verify that a valid SSL certificate is attached to the distribution.

### Problem: Videos are not playing

**Cause:** Video files may not have uploaded correctly, or CloudFront is not serving them with the correct content type.

**Solution:**
1. Verify the video files exist in the S3 bucket.
2. Check the file sizes match what is on your computer.
3. If files are missing, re-upload them.
4. If files exist but do not play, create a CloudFront invalidation (see above) to clear the cache.

---

## 12. Updating Your Website Later

Whenever you make changes to the website code, follow these steps to update the live site.

### 12.1 Rebuild the Website

```bash
cd /path/to/your/pillars-website
npm run build
```

### 12.2 Upload to S3

1. Go to the S3 console and open your bucket.
2. Click **Upload**.
3. Select all files and folders from your `dist/` folder.
4. Click **Upload** and wait for completion.

### 12.3 Invalidate the CloudFront Cache

1. Go to the CloudFront console and click on your distribution.
2. Click the **Invalidations** tab.
3. Click **Create invalidation**.
4. Enter `/*` in the Object paths field.
5. Click **Create invalidation**.
6. Wait a few minutes for the invalidation to complete.

### 12.4 Test

Visit your site and verify the changes appear. If you do not see the changes, do a hard refresh in your browser (`Cmd + Shift + R` on Mac, `Ctrl + Shift + R` on Windows).

---

## 13. Cost Estimate

Here is an approximate monthly cost for hosting this website on AWS:

| Service | Estimated Monthly Cost |
|---|---|
| **S3 Storage** (75 MB of files) | ~$0.02 |
| **S3 Requests** (GET requests) | ~$0.01 |
| **CloudFront Data Transfer** (first 1 TB free) | $0.00 |
| **CloudFront Requests** (first 2 million free) | $0.00 |
| **SSL Certificate (ACM)** | Free |
| **Route 53 Hosted Zone** (if using custom domain) | $0.50 |
| **Total** | **~$0.53/month** |

**Note:** These are estimates for a small website with moderate traffic. Costs will increase with higher traffic volumes. The AWS Free Tier covers most of these costs for the first 12 months for new accounts.

### Tips to Minimize Costs

- **Use CloudFront** — Serving files through CloudFront is cheaper than serving them directly from S3 because CloudFront has a generous free tier for data transfer.
- **Set up billing alerts** — Go to the AWS Billing console and set up a billing alert to notify you if your costs exceed a certain amount.
- **Monitor usage** — Check the CloudWatch metrics for your CloudFront distribution to see how much data is being transferred.

---

## Quick Reference Checklist

- [ ] Node.js installed on your computer
- [ ] `npm install` completed successfully
- [ ] `npm run build` completed successfully
- [ ] AWS account created
- [ ] S3 bucket created with public access enabled
- [ ] Website files uploaded to S3
- [ ] Static website hosting enabled on S3
- [ ] Bucket policy configured correctly
- [ ] CloudFront distribution created
- [ ] 404 and 403 error pages configured in CloudFront
- [ ] Distribution status shows "Deployed"
- [ ] Custom domain configured (optional)
- [ ] SSL certificate attached (optional)
- [ ] Site tested at CloudFront URL or custom domain
- [ ] Internal links tested
- [ ] Direct URL access tested
- [ ] HTTPS verified
- [ ] Mobile view tested
- [ ] Billing alerts set up
