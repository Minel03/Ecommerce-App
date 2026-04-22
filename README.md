# Forever - Premium E-commerce Full-Stack System

Forever is a comprehensive MERN stack e-commerce platform designed for a seamless shopping experience and robust administrative control. It features a modern, responsive frontend for customers and a dedicated admin dashboard for inventory and order management.

## 🚀 Key Features

### 🛒 Customer Frontend
- **Product Discovery**: Browse collections with category and sub-category filtering.
- **Smart Search**: Real-time product search functionality.
- **Shopping Cart**: Fully functional persistent cart with stock validation.
- **Secure Checkout**: Multi-gateway payment integration (Stripe & Razorpay).
- **User Authentication**: Secure JWT-based login and registration.
- **Order Tracking**: Real-time order status updates and history.

### 🛠️ Admin Dashboard
- **Inventory Management**: Add, update, and remove products with multi-image support (Cloudinary).
- **Order Control**: Manage customer orders, update statuses, and track fulfillment.
- **Access Control**: Secure admin-only access to management tools.

### 💻 Backend API
- **RESTful Architecture**: Clean and scalable Express.js API.
- **Robust Security**: Password hashing with Bcrypt and JWT authentication.
- **Media Hosting**: Integration with Cloudinary for optimized image storage.
- **Database**: MongoDB for flexible and efficient data persistence.

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Vite, React Router DOM
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payments**: Stripe, Razorpay
- **Image Storage**: Cloudinary
- **Notifications**: React Toastify

## 📂 Project Structure

```text
Ecommerce-App/
├── frontend/     # Customer-facing React application
├── admin/        # Administrative React dashboard
└── backend/       # Node.js/Express API server
```

## ⚙️ Setup & Installation

### 1. Prerequisites
- Node.js installed
- MongoDB account (Atlas)
- Cloudinary account
- Stripe & Razorpay accounts

### 2. Clone the Repository
```bash
git clone https://github.com/Minel03/Ecommerce-App.git
cd Ecommerce-App
```

### 3. Environment Configuration
Create a `.env` file in the **backend** directory:
```env
MONGODB_URI=your_mongodb_uri
CLOUDINARY_API_KEY=your_key
CLOUDINARY_SECRET_KEY=your_secret
CLOUDINARY_NAME=your_name
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
RAZORPAY_KEY_ID=your_razorpay_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

Create a `.env` file in the **frontend** and **admin** directories:
```env
VITE_BACKEND_URL=http://localhost:4000
```

### 4. Install Dependencies
```bash
# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install

# Admin
cd ../admin && npm install
```

### 5. Run the Application
```bash
# Start Backend (Port 4000)
cd backend && npm run server

# Start Frontend (Vite)
cd ../frontend && npm run dev

# Start Admin (Vite)
cd ../admin && npm run dev
```

## 📄 License
This project is for educational purposes.

---
Developed by [Minel03](https://github.com/Minel03)
