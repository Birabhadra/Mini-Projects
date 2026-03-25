# 🌱 Leaf Disease Detection

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Python](https://img.shields.io/badge/python-3.8+-green.svg)
![Status](https://img.shields.io/badge/status-Active-success.svg)

---

## 📋 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Results](#-results)
- [Dataset](#-dataset)
- [Contributing](#-contributing)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

**Leaf Disease Detection** is an image-processing and AI-powered tool to automate the detection and classification of plant leaf diseases using deep learning. Given a photo of a plant leaf, the model identifies the disease category, helping farmers, gardeners, and researchers in early diagnosis and timely intervention.

> 💡 **Vision:** Enhance crop health management with fast, reliable, and accessible disease detection.

---

## ✨ Features

✅ **Automatic Image-based Diagnosis**
- Fast disease detection from uploaded leaf images
- Supports multiple plant species

✅ **Deep Learning Model**
- Pretrained convolutional neural network (CNN)
- High accuracy on public datasets

✅ **Data Augmentation & Visualization**
- Data preprocessing and augmentation
- Results visualization (prediction + confidence)

�� **Easy to Use**
- Jupyter Notebook workflow
- Step-by-step instructions for running experiments

✅ **Extensible**
- Easily retrainable on new data
- Code organized for rapid customization

---

## 🛠️ Tech Stack

| Category         | Technology             |
|------------------|-----------------------|
| **Language**     | Python 3.8+, Jupyter  |
| **Deep Learning**| TensorFlow / Keras or PyTorch |
| **Image Processing** | OpenCV              |
| **Data Science** | NumPy, pandas, matplotlib, seaborn |
| **Visualization**| matplotlib, seaborn   |
| **Utilities**    | scikit-learn          |

---

## ⚙️ Installation

### Prerequisites
- **Python** (3.8 or higher)
- **Jupyter Notebook** (Recommended via Anaconda)
- **pip** or **conda** to manage packages

### Step-by-Step Setup

1. **Clone the Repository**
```bash
git clone https://github.com/Birabhadra/Mini-Projects.git
cd Mini-Projects/Leaf-Disease-Detection
```

2. **Install Dependencies**
```bash
pip install -r requirements.txt
```
_Or install packages manually:_
```bash
pip install numpy pandas matplotlib seaborn opencv-python scikit-learn tensorflow
```

3. **Download Dataset**
- Download the recommended dataset (e.g., [PlantVillage on Kaggle](https://www.kaggle.com/emmarex/plantdisease)) and place it in the `dataset/` folder.

---

## 🚀 Usage

- Open the notebook:
  ```bash
  jupyter notebook leaf_disease_detection.ipynb
  ```
- Run all cells sequentially.
- Upload your own leaf image or use the sample dataset images.
- The final cells will display the predicted disease class and related confidence/visualizations.

---

## 📁 Project Structure

```
Leaf-Disease-Detection/
├── leaf_disease_detection.ipynb    # Main notebook
├── requirements.txt                # List of dependencies
├── dataset/                        # Training/test images
├── model/                          # Saved model files
├── results/                        # Sample predictions
└── README.md                       # You are here!
```

---

## 📊 Results

> _Model achieves over **95% accuracy** on test images (sample value, update accordingly)._

Example predictions:

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/2c6a75b2-55e5-4294-a7da-8592f2454c08" />

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/c69a78ac-1e27-4347-8d15-3327485074e3" />


---

## 📂 Dataset

- Public dataset: [PlantVillage - Kaggle](https://www.kaggle.com/emmarex/plantdisease)
- Includes healthy and diseased leaves of tomato, potato, grape, apple, etc.

---

## 🤝 Contributing

We welcome community contributions! To contribute:

1. **Fork the Repository**
2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Mini-Projects.git
   cd Mini-Projects/Leaf-Disease-Detection
   ```
3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make Your Changes**
5. **Commit and Push**
   ```bash
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request** (PR) describing your update

**Code Style Guidelines**
- Use consistent naming and PEP8
- Add comments and markdown explanations in notebooks

**Commit Format**
```
feat: add new prediction module
fix: correct data augmentation bug
docs: update usage section
```

---

## 👨‍💻 Author

**Birabhadra** - [GitHub Profile](https://github.com/Birabhadra)

---

## 🙏 Acknowledgments

- [PlantVillage Dataset](https://www.kaggle.com/emmarex/plantdisease)
- Open source ML & CV communities
- Jupyter community for notebook tools

---

<div align="center">

⭐ **If you find this project helpful, please give it a star!** ⭐

**Last Updated**: March 25, 2026 | **Version**: 1.0.0

</div>
