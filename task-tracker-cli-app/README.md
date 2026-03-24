# 📝 Task Tracker CLI

A simple and lightweight **Command Line Interface (CLI)** application to manage your daily tasks efficiently.
Built using **Node.js (no external libraries)**, this project demonstrates file handling, CLI argument parsing, and state management using JSON.

---

## 🚀 Features

* ➕ Add new tasks
* ✏️ Update existing tasks
* 🗑️ Delete tasks
* 🔄 Mark tasks as:

  * Todo
  * In Progress
  * Done
* 📋 List tasks:

  * All tasks
  * Completed tasks
  * Pending tasks
  * Tasks in progress

---

## 📂 Project Structure

```
task-tracker-cli/
│
├── task-cli.js     # Main CLI application
├── tasks.json      # Stores all tasks (auto-created)
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/task-tracker-cli.git
cd task-tracker-cli
```

### 2. Initialize Node project

```
npm init -y
```

---

## ▶️ Usage

Run commands using:

```
node task-cli.js <command> [arguments]
```

---

## 📌 Commands

### ➕ Add Task

```
node task-cli.js add "Learn Node.js"
```

### ✏️ Update Task

```
node task-cli.js update 1 "Learn Advanced Node.js"
```

### 🗑️ Delete Task

```
node task-cli.js delete 1
```

### 🔄 Mark Task

```
node task-cli.js mark-in-progress 1
node task-cli.js mark-done 1
```

---

### 📋 List Tasks

```
node task-cli.js list
node task-cli.js list done
node task-cli.js list todo
node task-cli.js list in-progress
```

---

## 🗄️ Data Storage

All tasks are stored in a local JSON file:

```
tasks.json
```

Example:

```json
[
  {
    "id": 1,
    "description": "Learn Node.js",
    "status": "todo"
  }
]
```

---

## ⚠️ Error Handling

* Handles missing arguments
* Prevents invalid task IDs
* Validates status filters
* Automatically creates `tasks.json` if not present

---

## 🔥 Future Improvements

* Add task priority (low, medium, high)
* Add due dates & reminders
* Convert to global CLI (`npm link`)
* Add interactive CLI (user prompts)
* Add search functionality
* Cloud sync (Firebase / Supabase)
* AI-based task suggestions 🤖

---

## 🧠 Learnings

This project helped in understanding:

* Node.js file system (`fs` module)
* CLI argument parsing (`process.argv`)
* JSON data handling
* Writing clean, modular code
* Debugging real-world issues

---

## 🙌 Author

**Birabhadra Sahoo**

---

⭐ If you found this useful, consider giving it a star!
<!-- [Project link](https://roadmap.sh/projects/task-tracker) -->
