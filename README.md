# 🛒 Ravilla's Cart - E-Commerce Web Application

A full-stack E-Commerce web application built using **React**, **Django REST Framework**, and **PostgreSQL**. The application provides secure JWT authentication, shopping cart management, and order checkout functionality.

---

# 📌 Features

### 👤 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Logout

### 🛍️ Product Management
- Display all products
- Product Details page
- Category-wise products
- Product Images
- Product Pricing

### 🛒 Shopping Cart
- Add products to cart
- Remove products
- Update product quantity
- Cart Total Calculation
- Persistent Cart

### 📦 Checkout
- Shipping Details
- Payment Method Selection
- Place Order
- Order Creation
- Clear Cart after Successful Order

### ⚙ Backend
- Django REST Framework
- PostgreSQL Database
- JWT Authentication
- REST APIs
- CORS Configuration

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Context API

## Backend

- Django
- Django REST Framework
- Simple JWT
- PostgreSQL

## Tools

- Git
- GitHub
- VS Code
- Thunder Client

---

# 📂 Project Structure

```
ECOMMERCE_PROJECT
│
├── backend
│   ├── backend
│   ├── store
│   ├── manage.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙ Installation

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/ECOMMERCE_PROJECT.git
```

Go inside project

```bash
cd ECOMMERCE_PROJECT
```

---

## 2. Backend Setup

Go to backend folder

```bash
cd backend
```

Create virtual environment

```bash
python -m venv venv
```

Activate

### Windows

```bash
venv\Scripts\activate
```

### Linux/Mac

```bash
source venv/bin/activate
```

Install packages

```bash
pip install -r requirements.txt
```

Create **.env**

```env
DB_NAME=ecommerce_db
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

Run migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

Create admin

```bash
python manage.py createsuperuser
```

Run server

```bash
python manage.py runserver
```

Backend runs on

```
http://127.0.0.1:8000
```

---

## 3. Frontend Setup

Open another terminal

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create **.env**

```env
VITE_DJANGO_BASE_URL=http://127.0.0.1:8000
```

Run

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🔐 Authentication

JWT Authentication is implemented using:

- Access Token
- Refresh Token
- Bearer Authentication

Tokens are stored in Local Storage.

---

# 📡 API Endpoints

## Authentication

```
POST /api/signup/
POST /api/token/
POST /api/token/refresh/
```

## Products

```
GET /api/products/
GET /api/products/<id>/
```

## Categories

```
GET /api/categories/
```

## Cart

```
GET /api/cart/
POST /api/cart/add/
POST /api/cart/update/
POST /api/cart/remove/
```

## Orders

```
POST /api/orders/create/
```

---

# 📸 Screenshots

Add screenshots here.

Example:

- Home Page
- Product Details
- Cart
- Checkout
- Login
- Signup

---

# 🚀 Future Improvements

- Razorpay / Stripe Payment
- Wishlist
- Search Products
- Product Reviews
- Order History
- User Profile
- Admin Dashboard
- Email Notifications
- Product Filters
- Pagination

---

# 📚 What I Learned

- React Context API
- React Router
- JWT Authentication
- Django REST Framework
- PostgreSQL Integration
- REST API Development
- State Management
- Protected Routes
- CRUD Operations
- Environment Variables
- Git & GitHub

---

# 👨‍💻 Author

**Ravilla Gopi**

- GitHub: https://github.com/yourusername
- LinkedIn: https://linkedin.com/in/yourprofile

---

# ⭐ If you like this project

Give it a ⭐ on GitHub.
