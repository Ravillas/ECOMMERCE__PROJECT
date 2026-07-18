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
git clone https://github.com/Ravillas/ECOMMERCE_PROJECT.git
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

- Home Page
- <img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/0dc09f04-76aa-49fc-bfcf-922738c80e54" />

- Product Details
- <img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/806cea29-7407-4df1-bcc3-8c73713b644f" />

- Cart
- <img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/34b08b50-4eb3-4160-ac72-eaaa00b27857" />

- Checkout
- <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/33b6e1cb-b6ae-4dd7-921f-9077929c5694" />

- 
- Login
- <img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/1a76dfe8-2656-4f5a-9e11-b003f544a90d" />

- Signup
- <img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/b6623c2a-818f-4a4d-9696-94435872f587" />


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

- GitHub: https://github.com/Ravillas

- LinkedIn: https://linkedin.com/in/ravillagopi226/

---

# ⭐ If you like this project

Give it a ⭐ on GitHub.
