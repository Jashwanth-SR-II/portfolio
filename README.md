# 🌐 Personal Portfolio Website

A modern **single-page developer portfolio** built using **React and Vite**.
This project showcases my projects, skills, and contact information with a clean UI, smooth animations, and theme support.

---

## ✨ Features

* 🎨 **Modern UI Design**
* 🌗 **Light / Dark Mode Toggle**
* ⌨️ **Dynamic Typing Animation** for roles
* 📱 **Responsive Layout** using Bootstrap
* 🧭 **Smooth Navigation with Active Section Highlight**
* 🎯 **Project Showcase Section**
* 🧠 **Skills Section**
* 📬 **Contact Form**
* 🔗 **Social Links (GitHub, LinkedIn, etc.)**
* 🗂 **JSON-based mock backend** using json-server

---

## 🛠 Tech Stack

Frontend:

* React
* Vite
* Bootstrap
* CSS3
* JavaScript (ES6+)

Backend (Mock API):

* JSON Server

---

## 📂 Project Structure

```
portfolio
│
├── public
│
├── src
│   ├── assets
│   │   └── images
│   │
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   └── index.css
│
├── db.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/portfolio.git
```

```
cd portfolio
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Start the development server

```
npm run dev
```

---

### 4️⃣ Run the JSON backend

```
npx json-server --watch db.json --port 3001
```

The API will run at:

```
http://localhost:3001
```

---

## 📊 Example API Endpoints

```
/roles
/projects
/skills
```

These endpoints are used to dynamically fetch data for the portfolio.

---

## 🎨 UI Highlights

* Gradient navbar with animated underline
* Section reveal animations
* Typing text animation in hero section
* Clean card-based layout
* Theme-aware components

---

## 📬 Contact

If you'd like to connect:

* GitHub: https://github.com/yourusername
* LinkedIn: https://linkedin.com/in/yourusername

---

## 📄 License

This project is open source and available under the **MIT License**.

---

⭐ If you like this project, consider giving it a star!
