# 🧪 QA Automation Assessment - StafBook

Welcome to the **QA Automation Project** repository using [Playwright](https://playwright.dev/)!  
This project contains automated test cases for both **API** and **Web UI** flows.

---

## 📦 Clone & Setup

```bash
git clone https://github.com/fakhriariaf/QA_assesment_StafBook.git
cd QA_assesment_StafBook
```

### ⚙️ Install Dependencies

> Make sure you have [Node.js](https://nodejs.org/) installed.

```bash
npm install
npx playwright install
```

📖 For more information, visit the official Playwright docs:  
👉 [https://playwright.dev/docs/intro](https://playwright.dev/docs/intro)

---

## 🚀 How to Run Tests

You can execute tests with the following command:

```bash
npm run test ../tests/[fileName]
```

### 🧾 Examples:

```bash
npm run test ../tests/userAPI.spec.js
npm run test ../tests/flowWeb.spec.js
npm run test ../tests/loginCase.spec.js
```

---

## 📋 Test Case Documentation

🗂️ You can access the full **Test Case documentation** on Google Drive:
https://docs.google.com/spreadsheets/d/1-frgeWsJ0XqfRFmRrU4Wm4npoCpOMQbbuxFatfDNzUE/edit?usp=sharing

1. ✅ [API Test Cases]
2. 🌐 [Web Test Cases]
---

## 📁 Folder Structure

```
.
├── tests/
│   ├── userAPI.spec.js          # API test suite
│   ├── loginCase.spec.js        # Web login test suite
│   ├── flowWeb.spec.js          # Web flow test suite (inventory, cart, checkout)
│   └── pom/
│       └── object/              # Page Object files
├── screenshots/                 # Screenshots for each test result
├── package.json
└── README.md
```

---

## 💬 Notes

- Screenshots will be saved automatically after each test (pass or fail).
- Tests are written using Playwright’s modern syntax with Page Object Model for clarity and reusability.
- Tests include **positive and negative cases** for both API and Web scenarios.

---

## ✨ Author

👨‍💻 [Fakhri Aria F](https://github.com/fakhriariaf)

---
