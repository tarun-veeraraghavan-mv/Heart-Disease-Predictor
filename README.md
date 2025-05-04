# 🫀 Heart Disease Risk Predictor

A full-stack machine learning web application that predicts the risk of heart disease based on clinical features such as age, cholesterol, resting blood pressure, and more. Built with a React frontend and a Flask backend, this project demonstrates an end-to-end ML deployment pipeline, complete with real-time predictions, data analysis, and model evaluation.

---

## 🚀 Features

- ✅ **Real-time Heart Disease Prediction** (binary classification: 0 = No, 1 = Yes)
- 📊 Interactive UI built with **React**, deployed on **Netlify**
- 🧠 Backend powered by **Flask API**, hosted on **Railway**
- 📈 Trained ML pipeline with over **85% accuracy**
- 🧪 Supports inputs like age, cholesterol, blood pressure, ECG results, and more
- 🧹 Clean architecture and optimized models using **GridSearchCV**

---

## 📉 Machine Learning Overview

- Conducted **Exploratory Data Analysis (EDA)** using `pandas`, `matplotlib`, and `seaborn` to uncover patterns and correlations within the UCI Heart Disease dataset.
- Built multiple classification models:
  - `Logistic Regression`
  - `Random Forest Classifier`
  - `K-Nearest Neighbors`
- Used **GridSearchCV** to fine-tune hyperparameters for the best model performance.
- Evaluated model performance with:
  - **Accuracy**
  - **Precision**
  - **Recall**
  - **F1-Score**
  - **ROC-AUC Curve**
- Final model integrated into Flask backend for serving real-time predictions.

---

## 🖥️ Tech Stack

| Frontend      | Backend     | ML / Data      | Deployment         |
| ------------- | ----------- | -------------- | ------------------ |
| React         | Flask       | scikit-learn   | Netlify (Frontend) |
| Tailwind CSS  | Flask-REST  | pandas, NumPy  | Railway (Backend)  |
| Axios         |             | matplotlib     |                    |

---

## 📷 Preview

https://github.com/user-attachments/assets/92c0a9ca-7c78-49dc-ae9b-c831c3a2ee99

---

## 📂 Dataset

Used the [UCI Heart Disease Dataset](https://archive.ics.uci.edu/ml/datasets/heart+disease), preprocessed and cleaned for optimal model performance.
