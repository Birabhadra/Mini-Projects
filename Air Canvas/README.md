# 🎨 Air Canvas – Virtual Drawing using Hand Gestures

---

![Python](https://img.shields.io/badge/Python-3.8%2B-blue?logo=python)
![OpenCV](https://img.shields.io/badge/OpenCV-%3E=4.0.0-green?logo=opencv)
![MediaPipe](https://img.shields.io/badge/MediaPipe-enabled-orange)
![Status](https://img.shields.io/badge/status-Active-success.svg)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Controls](#-controls)
- [Project Structure](#-project-structure)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

**Air Canvas** is a computer vision-based project that enables users to draw in the air using only hand gestures. Powered by MediaPipe hand tracking and OpenCV, it detects finger movements and converts them into digital drawings in real time.

> 💡 **No mouse, no touchscreen — just your hand in the air!**

---

## ✨ Features

- ✅ **Real-time Hand Tracking**
  - Uses MediaPipe Hand Landmarker for accurate finger detection.
- ✅ **Draw in Air**
  - Move your index finger to draw on a virtual canvas.
- ✅ **Multiple Colors**
  - Blue, Green, Red, and Yellow drawing options.
- ✅ **Gesture-based Controls**
  - Raise index finger → Draw  
  - Lower finger → Stop drawing
- ✅ **Clear Canvas Button**
  - Instantly reset your drawing.
- ✅ **Dual Window View**
  - Live camera feed
  - Separate drawing board

---

## 🛠️ Tech Stack

| Category          | Technology           |
|-------------------|---------------------|
| **Language**      | Python              |
| **Computer Vision** | OpenCV            |
| **Hand Tracking** | MediaPipe           |
| **Data Structures** | Collections (deque)|
| **Numerical Ops** | NumPy               |

---

## ⚙️ Installation

### Prerequisites

- Python 3.8 or higher
- Webcam

### Step-by-Step Setup

1. **Clone the Repository**
    ```bash
    git clone https://github.com/YOUR_USERNAME/Air-Canvas.git
    cd Air-Canvas
    ```

2. **Install Dependencies**
    ```bash
    pip install opencv-python mediapipe numpy
    ```

3. **Download Model File**
    - Download `hand_landmarker.task` from [MediaPipe](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker)
    - Place it in the project root directory

4. **Run the Project**
    ```bash
    python aircanvas.py
    ```

---

## 🚀 Usage

- Start the program → Webcam opens.
- Use your index finger to draw.
- Select colors from the top menu.
- Use "CLEAR" to erase.

Two windows will appear:

- 🟢 **Output:** Live camera feed
- 🎨 **Paint:** Drawing canvas

**Press `q` to exit.**

---

## 🎮 Controls

| Action         | Gesture                       |
| -------------- | ---------------------------- |
| **Draw**       | Raise index finger           |
| **Stop Drawing** | Lower index finger           |
| **Select Color** | Move finger to top bar       |
| **Clear Screen** | Click "CLEAR" button         |

---

## 📁 Project Structure

```
Air-Canvas/
├── aircanvas.py             # Main application
├── hand_landmarker.task     # MediaPipe model
├── README.md                # Project documentation
└── requirements.txt         # (optional)
```

---

## 🔮 Future Improvements

- 🚀 Add brush size control
- 🚀 Add eraser tool
- 🚀 Save drawings as images
- 🚀 Gesture-based undo/redo
- 🚀 Multi-hand support
- 🚀 UI improvements

---

## 🤝 Contributing

Contributions are welcome!  
To get started:

1. **Fork the repository**
2. **Create a feature branch**
    ```bash
    git checkout -b feature/your-feature
    ```
3. **Commit your changes**
    ```bash
    git commit -m "Added new feature"
    ```
4. **Push & create a Pull Request**

---

## 👨‍💻 Author

**Birabhadra Sahoo**

[GitHub Profile](https://github.com/Birabhadra)

---

## 🙏 Acknowledgments

- **MediaPipe** – Hand tracking
- **OpenCV** – Image processing
- **NumPy** – Array operations

---

<div align="center">

⭐ **If you found this project useful, give it a star!** ⭐

</div>