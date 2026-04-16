# 🚀 GitHub Profile Analyzer

A React-based web application that allows users to search and analyze GitHub profiles in real-time.
It fetches user data and repositories using GitHub APIs and displays insights like followers, repositories, and total stars.

---

## 🌐 Live Demo
🔗 https://github-profile-analyzer-flame.vercel.app/



---

## 📸 Preview

![GitHub Profile Analyzer](./screenshot001.png)
---

## ✨ Features

✔️ Search GitHub users using username
✔️ Fetch and display user profile data
✔️ Show avatar, name, and bio
✔️ Display followers and public repositories count
✔️ ⭐ Calculate and show total stars across all repositories
✔️ 📌 Show top 5 repositories sorted by stars
✔️ 🖥 Display repository language
✔️ ⏳ Loading spinner while fetching data
✔️ ❌ Error handling for invalid username or API failure
✔️ ⌨️ Press **Enter key** to search

---

## 🛠️ Tech Stack

* ⚛️ React.js (useState Hook)
* 🎨 CSS
* 🌐 GitHub REST API

---

## 📁 Project Structure

```bash
src/
 ├── App.jsx
 ├── App.css
```

---

## ⚙️ How It Works

* Takes GitHub username as input
* Calls GitHub Users API to fetch profile
* Uses `repos_url` to fetch repositories
* Calculates total stars using `reduce()`
* Sorts repositories by stars and shows top 5

---

## 📦 Installation

```bash
git clone https://github.com/sonakshi-sahu15/github-profile-analyzer.git
npm install
npm run dev
```

---

## 🔗 API Used

* https://api.github.com/users/{username}
* https://api.github.com/users/{username}/repos

---

## 🚀 Key Highlights

* Efficient state management using React Hooks
* Clean UI with proper loading and error states
* Real-time API data fetching
* Optimized logic using array methods (reduce, sort, slice)

---

## 🚀 Future Improvements

* 🔄 Debounce search input
* 🌙 Dark mode
* 📊 Charts for better visualization
* 📄 Pagination for repositories

---

## 📄 License

MIT License

---

## 💡 Author

👩‍💻 Sonakshi Sahu
🔗 https://github.com/sonakshi-sahu15

---

⭐ If you like this project, give it a star!
