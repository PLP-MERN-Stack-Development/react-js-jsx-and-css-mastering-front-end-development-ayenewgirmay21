# 🎨 Week 3: React.js, JSX, and Tailwind CSS – Mastering Front-End Development

> A responsive and interactive React web application built using **Vite**, **Tailwind CSS**, and **React Hooks**.  
> This project demonstrates component architecture, state management, API integration, and responsive UI design.

---

## 🚀 Project Overview

This project was developed as part of **Week 3 Front-End Development Assignment**.  
It focuses on mastering modern **React.js** concepts including:

- Reusable component architecture
- JSX syntax and props
- State management with hooks (`useState`, `useEffect`, `useContext`)
- Custom hooks (`useLocalStorage`)
- API integration using `fetch()`
- Responsive styling with **Tailwind CSS**
- Theme toggling (Light/Dark mode)

---

## 🧠 Features

### 🧩 Component Architecture
- Modular and reusable React components (`Button`, `Card`, `Navbar`, `Footer`)
- Layout component to wrap pages with consistent design
- Custom props for component flexibility

### ✅ Task Manager
- Add, complete, delete, and filter tasks
- Local storage persistence using a custom hook
- Dynamic UI updates with React hooks

### 🌐 API Integration
- Fetch and display data from **JSONPlaceholder API**
- Loading and error states
- Pagination & search functionality

### 💅 Tailwind CSS Styling
- Fully responsive design (Mobile, Tablet, Desktop)
- Tailwind dark mode toggle
- Smooth transitions and hover animations

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|----------|
| ⚛️ **React.js (Vite)** | UI development and component management |
| 🎨 **Tailwind CSS** | Utility-first styling framework |
| ⚙️ **PostCSS & Autoprefixer** | CSS processing and optimization |
| 🔄 **React Router** | Page routing and navigation |
| ☀️ **Context API** | Global theme (light/dark) management |

---
react-task-app/
├── public/
├── src/
│ ├── components/
│ │ ├── Button.jsx
│ │ ├── Card.jsx
│ │ ├── Navbar.jsx
│ │ └── Footer.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ └── Tasks.jsx
│ ├── context/
│ │ └── ThemeContext.jsx
│ ├── hooks/
│ │ └── useLocalStorage.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── package.json
├── tailwind.config.cjs
├── postcss.config.cjs
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/react-task-app.git
cd react-task-app

2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm run dev


The app will run on http://localhost:5173

🧩 Tailwind CSS Configuration

For Tailwind v4+ users:

// postcss.config.cjs
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

🧪 Expected Outcome

✅ A fully functional, responsive React app featuring:

Dynamic Task Manager

API data fetching with error handling

Dark/Light theme toggle

Clean and modern Tailwind design

🌍 Deployment

The app can be deployed easily using Vercel, Netlify, or GitHub Pages.

Example (Vercel):
npm run build
vercel deploy


After deployment, add your live URL here:
🔗 Deployed App: https://your-project.vercel.app

🖼️ Screenshots
Light Mode	Dark Mode

	
👨‍💻 Author

Ayenew Girmay
📍 Ethiopia
💼 Front-End Developer | React Enthusiast
🔗 GitHub Profile

🧾 License

This project is licensed under the MIT License.
Feel free to use, modify, and share it for educational purposes.

⭐ If you found this project helpful, please star the repository! 🌟
## 📂 Folder Structure

