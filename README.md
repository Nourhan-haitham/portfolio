# Nourhan Haitham — Graphic Designer Portfolio Website

A complete, modern, elegant, and professional personal portfolio website for **Nourhan Haitham**, Graphic Designer.

Designed with a high-end graphic designer editorial aesthetic using the official brand color palette:
- **Warm Ivory (`#FEFAF3`)**: Primary website background.
- **Sage Green (`#B8CFB3`)**: Primary buttons, skill bars, badges, accents, and visual highlights.
- **Soft Pink (`#F6E2E9`)**: Alternating cards, testimonials, and subtle decorative panels.
- **Dark Charcoal (`#1C1E1B`)**: High-contrast typography for maximum readability.

---

## 📋 Section Order & Content Included

The portfolio strictly adheres to the requested section sequence:

1. **Home Page — Hero Section**:
   - Name: **Nourhan Haitham**
   - Title: **Graphic Designer**
   - Professional introduction
   - Large personal photo placeholder (with interactive local preview test)
   - **View Projects** button (smooth scrolls to the gallery)
   - **Download CV** button (linked to `assets/Nourhan_Haitham_CV.pdf`)

2. **About Me**:
   - Exact text preserved verbatim with elegant editorial typography, quote styling, and side capability points.

3. **My Education**:
   - Faculty of Sports Sciences – Zagazig University
   - ⭐ **Grade: Excellent** (highlighted in a distinct Sage Green badge)
   - Graduated status with full academic description.

4. **My Experience**:
   - **Graphic Design Trainee** at **NTI**
   - 2026 – Present
   - Complete verbatim description of Photoshop, Illustrator, and branding work.

5. **My Skills**:
   - All 12 requested skills with exact percentages:
     - Logo Design (95%)
     - Social Media Design (95%)
     - Brand Identity (90%)
     - Adobe Photoshop (90%)
     - Adobe Illustrator (90%)
     - Flyer & Poster Design (90%)
     - Banner Design (88%)
     - Business Card Design (90%)
     - Typography (85%)
     - Color Theory (88%)
     - Image Editing (90%)
     - Visual Composition (88%)
   - Animated progress bars using Sage Green on viewport scroll.

6. **My Projects — Main Portfolio Gallery**:
   - 6 reusable project card templates.
   - Category filtering (All, Logo Design, Social Media Design, Brand Identity, Marketing Design).
   - Dedicated expandable **Project Details Modal** featuring:
     - Project title, cover image, category, client, year, tools.
     - Full project description.
     - Objectives & creative concept.
     - Design process.
     - Brand color palette swatches.
     - Typography breakdown.
     - Multiple mockups & final presentation slots.
     - Direct inquiry link.

7. **Client Feedback**:
   - All 4 exact testimonial quotes with 5-star ratings.
   - Dedicated **Overall Project Rating** component with configurable placeholder.

8. **My Services**:
   - All 8 services with clean icons and alternating Warm Ivory / Soft Pink cards:
     1. Social Media Design
     2. Logo Design
     3. Brand Identity Design
     4. Business Card Design
     5. Flyer & Poster Design
     6. Banner Design
     7. Marketing Materials
     8. Creative Graphic Design

9. **Get in Touch**:
   - Exact introductory text.
   - Direct WhatsApp link formatted for Egypt: `https://wa.me/201002816904` (displays `01002816904`).
   - Direct email mailto link: `nourshaarawy86@gmail.com`.
   - Client-side validated contact message form.

10. **Navigation & Footer**:
    - Fixed responsive navigation with mobile menu toggle and scroll-spy active state.
    - Footer with Nourhan Haitham, Graphic Designer, copyright notice, and Back to Top button.

---

## 🎨 How to Personalize Your Portfolio

### 1. Uploading Your Personal Photo
- **Method A (Direct in browser)**: Click the **"Upload Portrait"** button in the hero section to immediately preview any photo from your computer.
- **Method B (Permanent file)**: Place your photo in the `assets/` folder (e.g. `assets/nourhan-portrait.jpg`), and in `index.html` update `<img id="personalPhotoImg" src="assets/nourhan-portrait.jpg" class="user-uploaded-photo">`.

### 2. Updating Your CV
- Replace `assets/Nourhan_Haitham_CV.pdf` with your actual PDF resume file.
- Or update the `href` attribute on the `#heroCvBtn` button in `index.html` to any Google Drive or LinkedIn URL.

### 3. Adding Your Project Images & Details
- In `index.html`, each card inside `#projectsGrid` has clear labels.
- In `script.js`, edit the `projectsData` object to update titles, clients, descriptions, and mockups for each of your 6+ projects.

---

## 🚀 Running Locally
Simply open `index.html` in any web browser, or serve it using Python / VS Code Live Server / Vite:
```bash
# Using Python
python -m http.server 3000

# Using Node (npx serve)
npx serve .
```
