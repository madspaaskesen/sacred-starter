# 🕊️ Sanctum Starter

A sacred, minimal Vue 3 + Tailwind + DaisyUI admin layout.

> For founders, healers, and dreamers who need something clean, soft, and ready.

## ✨ Features
- Vue 3 + Vite
- Tailwind CSS 4 + DaisyUI
- AdminLayout with topbar & sidebar
- Modular routing (Dashboard, Sessions, Users)

## 🌱 Getting Started

```bash
npm install
npm run dev
```

## 🛠️ Building for Production

```bash
npm run build
```

This will create a production-ready version of your Sanctum app inside the `/dist` folder.

### 🌐 Why `404.html` is Created

Sanctum is a **Single Page Application (SPA)** — it uses Vue Router to handle internal navigation like `/sessions` or `/users`. On static hosts like **Render**, **GitHub Pages**, or **Netlify**, if a user directly visits a subpage (e.g., `/sessions`), the server doesn't know how to serve that route — and will return a 404 error.

To solve this:

* A small `prebuild.js` script automatically **copies `index.html` to `404.html`**
* This ensures static hosts always serve your SPA, even for unknown routes
* Vue Router then takes over and displays the correct page

This prevents broken links and ensures **deep links and refreshes work properly** on all hosting platforms.

## 💛 Made with love by Sacred-AI

🙏 Built by [Mads Paaskesen](https://sacred-ai.com) & [MP-IT](https://mp-it.dk)  
🌸 Powered by [Vue 3](https://vuejs.org), [Tailwind CSS](https://tailwindcss.com), [DaisyUI](https://daisyui.com)
