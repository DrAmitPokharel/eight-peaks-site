# Eight Peaks Engineering — Website

A simple 3-page static site (Home, About, Contact) — no build tools, no
dependencies, just HTML/CSS/JS. You can preview it right now by opening
`index.html` in a browser.

One thing left before this goes fully live:

1. **Deploy it for free and point your domain at it** (15–20 minutes)

The contact form is already connected — `contact.html` has a live
[Web3Forms](https://web3forms.com) access key tied to
eightpeaksengineering@gmail.com, so submissions will email straight there
once the site is deployed. Nothing to configure.

If you ever need to reconnect it (e.g. a new access key, or a different
recipient email), go to https://web3forms.com, get the new key, and swap
the value in this line near the top of the `<form>` in `contact.html`:

```html
<input type="hidden" name="access_key" value="907ad3f4-d8ab-45d2-8ea5-8de51f716af1">
```

---

## Deploy for free + connect eightpeaksengineering.com

Either option below is completely free, with no subscription, forever
(within very generous limits a small company site will never hit).

### Option A — GitHub Pages (most common, recommended)

1. Create a free account at https://github.com if you don't have one.
2. Create a new **public** repository (e.g. `eight-peaks-site`).
3. Upload all the files in this folder to that repository (drag-and-drop
   works fine on github.com — use "Add file" → "Upload files").
4. In the repo, go to **Settings → Pages**. Under "Build and deployment",
   set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
   Save.
5. Still in **Settings → Pages**, under "Custom domain" enter
   `eightpeaksengineering.com` and save. GitHub will create a `CNAME`
   file in your repo automatically.
6. In your GoDaddy DNS panel (Domain → DNS → Manage DNS) for
   eightpeaksengineering.com, add these records:

   | Type  | Name | Value                  |
   |-------|------|------------------------|
   | A     | @    | 185.199.108.153        |
   | A     | @    | 185.199.109.153        |
   | A     | @    | 185.199.110.153        |
   | A     | @    | 185.199.111.153        |
   | CNAME | www  | `<your-github-username>.github.io` |

   Remove/replace any existing A or CNAME records on `@`/`www` that GoDaddy
   put there by default (e.g. its "parked page" record).

7. Back in GitHub Pages settings, check **Enforce HTTPS** once it becomes
   available (can take up to a few hours after DNS propagates).
8. DNS changes typically take effect within 30–60 minutes, sometimes up to
   24 hours.

### Option B — Cloudflare Pages (also free, no git required)

1. Create a free account at https://pages.cloudflare.com.
2. Create a new project using **Direct Upload**, and drag the whole site
   folder in (no GitHub needed).
3. Once deployed, go to the project's **Custom domains** tab and add
   `eightpeaksengineering.com` and `www.eightpeaksengineering.com`.
4. Cloudflare will show you the DNS records to add. If you move your
   domain's nameservers to Cloudflare (also free), this step is automatic;
   otherwise add the CNAME/A records it gives you in your GoDaddy DNS
   panel, same as Option A.

Either option works well — GitHub Pages is the more common default for a
simple company site like this one; Cloudflare Pages is worth it if you
want to add more advanced features later (redirects, forms, etc.) without
switching hosts.

---

## Updating the site later

- **Text/content changes**: edit the relevant `.html` file directly, or
  ask me to make the change and re-send the files.
- **New pages**: copy the structure of an existing page (header/footer)
  and add a link to it in the nav menu in *all three* HTML files.
- **Logo/branding**: swap `assets/logo.jpg` and the favicon files in
  `assets/` if the logo ever changes.

## What's inside

```
index.html      Home page
about.html      About page
contact.html    Contact page (form + email)
css/style.css   All styling
js/main.js      Mobile nav + contact form submission logic
assets/         Logo + favicons
```
