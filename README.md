# Bloomie — Minimalist Study Reviewer

A calm, distraction-free study reviewer designed for clarity, visual learning, and rapid knowledge retention. Built with React, TypeScript, Tailwind CSS, and Vite, ready for deployment on Vercel or any modern static hosting service.

---

## ✨ Features

- **Linear Lecture Notes**: Continuous, distraction-free reading surface with high-legibility typography, categorized sections, and text-to-speech support.
- **Embedded Visual Diagrams**: Vector educational infographics from course materials:
  - NIOSH Hierarchy of Controls (Inverted Pyramid)
  - PPE Donning & Doffing Sequential Procedures
  - Biological Safety Cabinets (BSCs Class I, II, III) Classification
  - Biosafety Levels (BSL 1–4) Risk Matrix
  - NFPA 704 Standard Chemical Hazard Diamond
  - 10% Bleach Fresh Daily Disinfection Protocol
- **Interactive Question Matrix**: Visual questions grid with numbered boxes allowing students to skip through questions, view real-time correctness, score tracking, and instant "Restart Quiz" controls.
- **Retractable Navigation**: Collapsible sidebar with quick subject and reviewer search, reading depth tracker, and accuracy summaries.
- **Custom Aesthetic Themes**: Soft flower pastel themes (Pink Peony, Purple Lavender, Blue Hydrangea, Golden Sunflower, Mint Sage).
- **Zero Persistent Backend Required**: Runs completely client-side in the browser with no databases or tracking dependencies required.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd bloomie
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Visit `http://localhost:3000` or the port shown in your terminal.

### 4. Build for Production
```bash
npm run build
```

---

## 📦 Deployment to Vercel

This project includes a pre-configured `vercel.json` for single-page application (SPA) routing.

### Deploy with Vercel CLI
```bash
npx vercel
```

### Deploy via GitHub
1. Push this repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/new), import your GitHub repository.
3. Keep default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

---

## 📄 License

MIT License. Designed with care for students and educators.
