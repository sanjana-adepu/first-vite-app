# 🎮 Charaplay

Charaplay is a fun and interactive web application that hosts a variety of mini-games like Sudoku, Wordle, and Crossword. Designed for entertainment and learning, it features customizable themes to enhance the user experience.

---

## 🌐 Live Demo

[Charaplay Website](https://sanjana-adepu.github.io/first-vite-app/)

---

## 📌 Features

- 🎲 Mini-games: Sudoku, Wordle, and Crossword
- 🎨 Theme customization with light, dark, and forest themes
- 🧩 Responsive layout built with Tailwind CSS
- 🛠 Smooth animations and clean UI using React components
- 🧠 Educational and logic-based games

---

## 🛠 Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Logic & State Management:** JavaScript (with Context API for themes)
- **Design Tools:** Figma (for prototyping and UI planning)

---

## 📁 Folder Structure

src/
├── Components/
│ └── Sudoku/
│ ├── SudokuGrid.jsx
│ ├── Crossword.jsx
│ ├── WordleI.jsx
│ ├── WordleII.jsx
│ ├── Theme.jsx
│ ├── ThemeContext.jsx
│ ├── Home.jsx
│ └── Navbar.jsx
├── App.jsx
├── Root.jsx
├── index.css
├── main.jsx


---

## 🧑‍💻 Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/your-username/charaplay.git
cd charaplay
npm install
npm run dev

🎨 Custom Themes
Themes are controlled via a custom ThemeContext and Theme.jsx. Easily switch between light, dark, and forest themes using Tailwind’s utility classes dynamically.

