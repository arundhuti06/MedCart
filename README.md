# 🛒 MedCart - Online Pharmacy E-commerce Platform

MedCart is a full-stack online pharmacy e-commerce application designed to provide users with a seamless and secure experience for purchasing medicines and healthcare products. Customers can browse categorized products, manage a shopping cart, place orders with either Cash on Delivery or online payment via Stripe, and track their order history.

---

## 🚀 Features
- User registration and secure authentication
- Browse and search medical products by category
- Add, update, and remove items from cart
- Manage shipping addresses
- Checkout with Cash on Delivery or Online Payment (Stripe)
- View past orders and track current order status
- Admin dashboard for managing products and orders
- Responsive design for mobile, tablet, and desktop

---

## 🛠️ Tech Stack
- **Frontend**: React.js, Tailwind CSS, Redux
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe

---

## 📂 Project Structure
```
/frontend  --> React application (pages, components, context)
/backend   --> Node.js server (controllers, models, routes)
/config    --> Stripe configuration and environment setup
```

---

## 📦 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/arundhuti06/MedCart.git
cd MedCart
```

### 2. Install dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd backend
npm install
```

### 3. Environment Variables

**Backend `.env`:**
```
PORT=8080
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_ENPOINT_WEBHOOK_SECRET_KEY=your_stripe_webhook_secret
FRONTEND_URL=http://localhost:3000
```

**Frontend `.env`:**
```
VITE_STRIPE_PUBLIC_KEY=your_stripe_publishable_key
```

### 4. Running the application

**Backend:**
```bash
npm run dev
```

**Frontend:**
```bash
npm run dev
```

Access your application at `http://localhost:3000`

---

## 🔗 GitHub Repository
[Click here to view the repo](https://github.com/arundhuti06/MedCart)
