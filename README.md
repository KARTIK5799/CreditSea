# 🚀 CreditSea Fullstack Application (MERN)

## 📌 Project Overview
CreditSea is a **fullstack MERN application** that processes XML files containing credit data.  
It provides a **backend API** to upload and extract XML data, store it in MongoDB, and a **React frontend** to visualize credit reports.

---

## 📌 Tech Stack
### **Frontend (React)**
- React.js (UI Framework)
- Axios (API Requests)
- React Router (Navigation)
- Tailwind CSS (Styling)

### **Backend (Node.js, Express, MongoDB)**
- Node.js (Runtime)
- Express.js (Web Framework)
- MongoDB + Mongoose (Database)
- Multer (File Uploads)
- xml2js (XML Parsing)
- CORS (Cross-Origin Requests)
- dotenv (Environment Variables)

---

# 🛠 **Project Setup**
## **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/creditsea-fullstack.git
cd creditsea-fullstack
```

---

# 🎯 **Backend Setup**
## **2️⃣ Install Backend Dependencies**
```sh
cd server
npm install
```

## **3️⃣ Configure Environment Variables**
Create a `.env` file inside the `server/` directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/creditsea
```

## **4️⃣ Start Backend Server**
For development:
```sh
npm run dev
```
For production:
```sh
npm start
```

### **5️⃣ Backend API Endpoints**
#### 📌 **Upload XML File**
- **Endpoint:** `POST /upload`
- **Description:** Uploads an XML file, extracts data, and stores it in MongoDB.
- **Request Type:** `multipart/form-data`
- **Request Body:** `file` (XML File)

📌 **Success Response:**
```json
{
  "message": "New XML record added successfully",
  "data": {
    "name": "John Doe",
    "mobile": "9876543210",
    "pan": "ABCDE1234F",
    "creditScore": 750,
    "totalAccounts": 8,
    "creditCards": [
      {
        "creditCardNumber": "1234567890",
        "bankName": "ICICI Bank",
        "amountOverdue": 10000
      }
    ]
  }
}
```

#### 📌 **Fetch All Reports**
- **Endpoint:** `GET /reports`
- **Response:**
```json
[
 {
  "message": "New XML record added successfully",
  "data": {
    "name": "John Doe",
    "mobile": "9876543210",
    "pan": "ABCDE1234F",
    "creditScore": 750,
    "totalAccounts": 8,
    "creditCards": [
      {
        "creditCardNumber": "1234567890",
        "bankName": "ICICI Bank",
        "amountOverdue": 10000
      }
    ]
  }
}
]
```

---

# 🎨 **Frontend Setup**
## **6️⃣ Install Frontend Dependencies**
```sh
cd ../client
npm install
```

## **7️⃣ Start Frontend Server**
```sh
npm start
```

## **8️⃣ Frontend Features**
✅ **Upload XML File**  
✅ **View Credit Reports**  
✅ **Search & Filter Reports**  
✅ **Responsive UI (Mobile-Friendly)**  

---

# 🏗 **Project Structure**
```
CreditSea-Fullstack/
│── server/         # Backend (Node.js, Express, MongoDB)
│   ├── config/     # Database & Config Files
│   ├── models/     # Mongoose Models
│   ├── routes/     # API Routes
│   ├── controllers/# Business Logic
│   ├── middleware/ # Multer File Upload Middleware
│   ├── server.js   # Main Backend Entry
│   ├── .env        # Environment Variables
│── client/         # Frontend (React.js)
│   ├── src/        # React App Source
│   ├── components/ # UI Components
│   ├── App.js      # Main React App
│   ├── index.js    # React Root File
│── README.md       # Documentation
```

---

# 🚀 **Deployment**
### **🔹 Deploy Backend (Render)**
1. Sign up on [Render](https://render.com/)
2. Create a **New Web Service**
3. Connect GitHub Repository
4. Set **Environment Variables** (MONGO_URI, PORT)
5. Deploy & Get Live API URL

### **🔹 Deploy MongoDB (MongoDB Atlas)**
1. Sign up at [MongoDB Atlas](https://www.mongodb.com/atlas/database)
2. Create a Free Cluster
3. Get **MongoDB Connection String**
4. Update `.env`:
   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/creditsea
   ```

### **🔹 Deploy Frontend (Vercel)**
1. Sign up on [Vercel](https://vercel.com/)
2. Connect GitHub Repository
3. Set **Environment Variables** (API URL)
4. Deploy & Get Live Frontend URL

---

# 🛠 **Testing**
- **Test API Endpoints using Postman**
- **Check error handling with invalid XML files**
- **Ensure frontend correctly fetches data**

---

# 📜 **License**
This project is **MIT Licensed**.

---

# 📞 **Contact**
For queries or support, contact:
- **Email:** kartiksapkal5799@gmail.com
- **LinkedIn:** [linkedin.com/in/kartiksapkal](https://linkedin.com/in/kartiksapkal)
- **GitHub:** [github.com/KARTIK5799](https://github.com/KARTIK5799)

```
