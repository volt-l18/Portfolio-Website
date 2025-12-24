# Portfolio Website - Khushal Neekhra

A modern, responsive personal portfolio website designed to showcase projects, skills, and professional experience. Built with performance and user experience in mind, leveraging the latest web technologies for smooth animations and seamless navigation.

## 🚀 Overview

This Single Page Application (SPA) serves as a digital resume and project showcase. It features a clean, minimal design with advanced interactions powered by GSAP and smooth scrolling via Lenis.

**Live Demo:** [Insert Live Link Here]

## ✨ Key Features

*   **Responsive Design:** Fully fluid layout adapting to all screen sizes (Mobile, Tablet, Desktop).
*   **Smooth Animations:** High-performance scroll-triggered animations using **GSAP** and **ScrollTrigger**.
*   **Smooth Scrolling:** Integrated **Lenis** for a modernized, inertia-based scrolling experience.
*   **Modern Styling:** Utility-first styling with **Tailwind CSS** for rapid and consistent UI development.
*   **Performance:** Optimized build using **Vite** and **React**.

## 🛠️ Tech Stack

*   **Core:** [React 18](https://reactjs.org/) (TypeScript)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [GSAP](https://greensock.com/gsap/)
*   **Scrolling:** [Lenis](https://github.com/studio-freight/lenis)
*   **Linting:** ESLint

## 💻 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/portfolio-website.git
    cd portfolio-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## 📜 Scripts

*   `npm run dev`: Starts the local development server with HMR.
*   `npm run build`: Compiles TypeScript and builds the application for production.
*   `npm run preview`: Locally previews the production build.
*   `npm run lint`: Runs ESLint to check code quality.

## 📂 Project Structure

```
/public          # Static assets (images, icons)
/src
  /components    # Reusable React components (Hero, About, etc.)
  App.tsx        # Main application component & layout
  main.tsx       # Entry point
  index.css      # Global styles & Tailwind imports
```

## ⚠️ Usage & Copyright

This project is open for learning and inspiration. You are welcome to study the code, understand the architecture, and use the concepts in your own projects.

**Please do not copy the design or content entirely as your own.** This portfolio is a representation of my personal brand and work. If you use this codebase as a starter, please significantly modify the design and layout to make it unique to you.