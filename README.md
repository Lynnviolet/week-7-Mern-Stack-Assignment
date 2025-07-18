# week-7-Mern-Stack-Assignment

This project is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application built and deployed as part of a Week 7 assignment focused on **DevOps essentials**, including **deployment**, **CI/CD**, and **performance monitoring**.

## 📦 Tech Stack

- **Frontend:** React.js + Tailwind CSS
- **Backend:** Node.js + Express.js
- **Database:** MongoDB (Atlas)
- **CI/CD:** GitHub Actions
- **Hosting:**
  - Backend: Heroku
  - Frontend: Vercel
- **Monitoring:** Health check endpoint, logging, compression, and Helmet for security

---

## 📁 Folder Structure

/client → React frontend
/server → Express backend API
├── app.js → Main Express app
├── server.js → Entry point
├── routes/health.js → Health check route
.github/workflows → GitHub Actions CI/CD config
.env.example → Environment variable sample
README.md

yaml
Copy
Edit

---

## 🚀 Features Implemented

### ✅ Core Features
- Blog creation, reading, updating, and deletion (CRUD)
- Category management
- API connected via MongoDB with Mongoose
- React frontend consuming backend API

### ✅ DevOps Features
- Deployment of frontend on **Vercel**
- Deployment of backend on **Heroku**
- CI/CD setup using **GitHub Actions**
- Production-ready Express configuration (Helmet, Compression, Logging)
- `/health` endpoint to monitor uptime and status

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Lynnviolet/week-6-Mern-Stack-Assignment.git
cd week-6-Mern-Stack-Assignment
2. Set Up Environment Variables
Create a .env file in the /server directory based on .env.example:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=production
JWT_SECRET=your_jwt_secret
3. Install Dependencies
Backend

bash
Copy
Edit
cd server
npm install
Frontend

bash
Copy
Edit
cd ../client
npm install
🧪 Run Locally
Backend
bash
Copy
Edit
cd server
npm run dev
Frontend
bash
Copy
Edit
cd client
npm run dev
Access the app at http://localhost:3000

🧰 Health Monitoring
Visit:

bash
Copy
Edit
GET http://localhost:5000/health
Response:

json
Copy
Edit
{
  "status": "OK",
  "uptime": 120.234,
  "timestamp": 1629482330342
}

👩🏽‍💻 Author
Lynn Violet Wanjiru Kimotho
