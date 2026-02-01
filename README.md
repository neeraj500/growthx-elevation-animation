# Logo Animation – React + SVG

This project recreates a brand-style logo animation using **React, SVG, and CSS animations**. The animation is fully code-driven (no Lottie), loads instantly, and can be replayed.

## 🛠 Tech Stack

- **React**
- **Vite**
- **CSS (keyframes + transforms)**
- **SVG**

*No external animation libraries are used.*

### Project Structure

```
src/
├─ animation/
│  └─ LogoSVG.jsx        # SVG structure & layout
├─ components/
│  └─ AnimationRoot.jsx  # Replay logic
├─ logo.css              # All animation styles & keyframes
├─ App.jsx
├─ main.jsx
└─ index.css
```

## 📦 Prerequisites

- **Node.js** ≥ 16  
- **npm** (bundled with Node.js)

Check versions:
```bash
node -v
npm -v
```

Clone the repository and install dependencies:
```bash
git clone <your-repo-url>
dd <your-repo-name>
```
Install dependencies:
```bash
yarn install OR npm install  # depending on your package manager preference 
```
Start the dev server:
```bash
yarn dev OR npm run dev  # depending on your setup 
```
Open in browser: [http://localhost:5173](http://localhost:5173)

---
## AI Usage 
AI tools (ChatGPT, Gemini) were used to reason about SVG path behavior, animation sequencing, and to refine code structure and documentation. All decisions were manually reviewed and applied.