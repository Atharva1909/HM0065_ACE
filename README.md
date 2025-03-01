# 📘 QuizMatch - Learn, Compete, Win

QuizMatch is an interactive **student learning platform** that enhances engagement through **lessons, quizzes, and real-time competitive matchmaking**. The platform is designed to make learning **fun, interactive, and competitive**, helping students track their progress and improve their knowledge.

---

## 🚀 Getting Started

### 1️⃣ Prerequisites
Ensure you have the following installed before running the project:
- **Node.js** (v16 or later)
- **npm** (v8 or later)
- **Firebase Account** (for authentication & database)

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/quizmatch.git
cd quizmatch
```

### 3️⃣ Install Dependencies
```bash
npm install
```

### 4️⃣ Set Up Firebase
1. Go to **[Firebase Console](https://console.firebase.google.com/)** and create a new project.
2. Enable **Authentication (Email/Password Login)** and **Firestore Database**.
3. Create a `.env` file in the project root and add the Firebase credentials:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

### 5️⃣ Start the Development Server
```bash
npm start
```
Runs the app in development mode. Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📌 Features
✅ **User Authentication** – Secure signup & login using Firebase  
✅ **Interactive Lessons** – Structured learning materials with progress tracking  
✅ **Quiz Matchmaking** – Real-time quiz battles with other students  
✅ **Instant Scoring** – See your quiz results immediately  
✅ **Leaderboard** – Compete with others and rank based on scores  
✅ **Gamification** – Earn points, badges, and rewards for achievements  

---

## 🛠️ Tech Stack

### Frontend
- **React (TypeScript)** – Modern, scalable UI
- **Tailwind CSS** – Fast and responsive styling
- **React Context API** – Global state management

### Backend
- **Firebase Authentication** – Secure user management
- **Firebase Firestore** – Real-time database for quizzes & leaderboards
- **WebSockets** – Real-time quiz matchmaking

---

## 🎮 How It Works?

### 1️⃣ User Authentication
Users can sign up/login using their **email and password**. Firebase handles authentication and user sessions.

### 2️⃣ Learning Lessons
Students can **browse interactive lessons** and track progress in their dashboard.

### 3️⃣ Quiz Matchmaking
- A student enters the **quiz lobby** and waits for an opponent.
- The system **matches students** in real-time using **WebSockets**.
- Players **answer quiz questions** simultaneously.

### 4️⃣ Scoring & Leaderboard
- Points are awarded based on **correct answers and speed**.
- The **leaderboard updates in real-time**, ranking students globally.

---

## 📦 Build & Deployment

### For Production Build:
```bash
npm run build
```
This creates a minified, optimized build inside the `/build` folder.

### For Deployment:
You can deploy the frontend using:
- **Vercel**
- **Netlify**
- **Firebase Hosting**

For Firebase Hosting:
```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. **Fork** the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-your-feature
   ```
5. Open a **Pull Request** for review.

---

## 📩 Contact
📧 Email: **atharvapravin2004@gmail.com**  
🔗 GitHub: **[Atharva1909](https://github.com/Atharva1909)**  

---

### 🚀 Ready to Learn & Compete? Join QuizMatch Now!
