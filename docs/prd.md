# Requirements Document

## 1. Application Overview

- **Name**: MyRed Travels
- **Description**: A single-page promotional landing website for the MyRed Travels travel app. The site showcases the app's features, destinations, and social travel capabilities, driving users to download via App Store and Google Play Store. Brand color is red/coral. The site is bilingual (French and English), with French as the default language and a language toggle in the sticky header.

---

## 2. Page Structure

Single-page layout with the following sections in order:

1. Sticky Header Bar
2. Hero Section
3. Features / Benefits Section
4. App Screenshots Carousel
5. Testimonials Section
6. Footer

---

## 3. Section-by-Section Functional Description

### 3.1 Sticky Header Bar

- A header bar that remains fixed at the top of the viewport as the user scrolls down the page.
- Displays the website logo using the image at: https://miaoda-conversation-file.s3cdn.medo.dev/user-d3irbo6242kg/app-dxkz3ebw9eyp/20260824/Exe_Logo_My_Red_Travels.png
- The same logo URL is used as the favicon for the browser tab.
- Contains a language toggle allowing the user to switch between French (FR) and English (EN).
- French is the default language on page load; English is the secondary language.
- No navigation links in the header.

### 3.2 Hero Section

- Displays the MyRed Travels app name and a short tagline promoting travel discovery.
- All visible copy (app name tagline, call-to-action text) is provided in both French and English and switches based on the selected language.
- Shows an app mockup image (phone/device frame with app UI).
- Displays two download badges side by side:
  - App Store badge (links to App Store)
  - Google Play Store badge (links to Google Play Store)
- Primary call-to-action encourages app download.

### 3.3 Features / Benefits Section

- Highlights the core value propositions of the MyRed Travels app.
- Content covers: travel discovery, explore destinations, book trips, and social travel features.
- Each feature presented with an icon or illustration, a short title, and a brief description.
- All titles and descriptions are provided in both French and English and switch based on the selected language.

### 3.4 App Screenshots Carousel

- Displays a horizontal scrollable or auto-rotating carousel of app screenshots.
- Shows key screens of the MyRed Travels app (e.g., destination discovery, trip booking, social feed).
- Users can navigate between screenshots (previous/next controls or swipe).
- Any visible labels or captions switch based on the selected language.

### 3.5 Testimonials Section

- Displays user reviews or testimonials about the MyRed Travels app.
- Each testimonial includes: reviewer name, review text, and optionally a star rating or avatar.
- Section heading and any UI labels are provided in both French and English and switch based on the selected language.

### 3.6 Footer

- Contains brand name (MyRed Travels) and copyright notice.
- Includes the following links:
  - Privacy Policy: links to https://myredtravels.com/privacy-policy.html
  - Terms of Service: links to https://myredtravels.com/terms-conditions.html
  - Contact information (if applicable)
- Repeats App Store and Google Play Store download badges.
- All visible footer copy (link labels, copyright text) is provided in both French and English and switches based on the selected language.

---

## 4. Bilingual Content Rules

- French is the default language displayed on initial page load.
- The language toggle in the sticky header allows switching between FR and EN.
- All visible copy across every section (headings, body text, button labels, link labels, captions) must be available in both French and English.
- Switching the language updates all visible copy on the page without a full page reload.
- The selected language preference persists for the duration of the session.

---

## 5. Design & Brand Guidelines

- Primary brand color: red/coral.
- Fully responsive layout (desktop, tablet, mobile).
- Modern, clean design consistent with the visual style of https://myredtravels.com/.
- No navigation links in the header beyond the logo and language toggle.
- Logo image: https://miaoda-conversation-file.s3cdn.medo.dev/user-d3irbo6242kg/app-dxkz3ebw9eyp/20260824/Exe_Logo_My_Red_Travels.png (used in sticky header and as favicon).

---

## 6. Acceptance Criteria

1. Open the website URL in a browser and confirm the page loads in French by default.
2. Verify the sticky header displays the logo and language toggle (FR/EN), and remains fixed at the top when scrolling.
3. Click the language toggle to switch to English and confirm all visible copy on the page updates to English; switch back to French and confirm all copy reverts to French.
4. Verify the browser tab favicon matches the logo at the specified URL.
5. Verify the hero section displays the app mockup, tagline, and both App Store and Google Play Store badges.
6. Click the App Store badge and confirm it navigates to the App Store link.
7. Click the Google Play Store badge and confirm it navigates to the Google Play Store link.
8. Scroll down and verify the Features/Benefits section displays travel-related content in the currently selected language.
9. Verify the Screenshots Carousel loads and allows navigation between app screenshots.
10. Verify the Testimonials section displays at least one user review.
11. Verify the Footer displays the brand name, copyright, download badges, and that the Privacy Policy link navigates to https://myredtravels.com/privacy-policy.html and the Terms of Service link navigates to https://myredtravels.com/terms-conditions.html.
12. Resize the browser to mobile width and confirm the layout remains usable and visually correct.

---

## 7. Out of Scope

- Navigation links in the header (beyond logo and language toggle).
- User login, registration, or account management.
- Actual app download functionality (badges link to external stores only).
- Backend data storage or CMS.
- Multi-page routing or additional pages.
- Blog, news, or dynamic content sections not present in the original site.