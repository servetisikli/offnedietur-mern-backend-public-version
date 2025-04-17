# OffnedieTur DE MERN Backend (Public Version)

## 📋 Project Overview

This is the backend API for OffnedieTur, a service management system developed using the MERN stack (MongoDB, Express, React, Node.js). This backend handles user authentication, contact forms, travel requests, support tickets, and notifications for the [offnedietur.de](https://offnedietur.de) website.

## 🚀 Features

- **User Management**
  - Registration with email verification
  - Authentication using JWT tokens
  - Password reset functionality
  - User profile management

- **Contact Management**
  - Contact form submission processing

- **Service Request System**
  - Create and manage travel requests
  - Admin interface for handling requests

- **Support Ticket System**
  - Create and manage support tickets
  - Admin responses
  - Ticket status tracking

- **Notification System**
  - User notifications
  - Read status tracking

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database (with Mongoose ODM)
- **JWT**: JSON Web Tokens for authentication
- **Nodemailer**: Email sending functionality
- **Stripe**: Payment processing
- **Brevo API**: Marketing and transactional emails
- **Helmet**: Security middleware
- **CORS**: Cross-Origin Resource Sharing support

## 📦 Dependencies

```json
{
  "@getbrevo/brevo": "^1.0.1",
  "bcryptjs": "^2.4.3",
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.2",
  "express-async-handler": "^1.2.0",
  "helmet": "^8.0.0",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.9.6",
  "nodemailer": "^6.10.0",
  "stripe": "^17.6.0"
}
```

## 🗂️ Project Structure

```
offnedietur-mern-backend-public-version/
├── config/
│   └── db.js           # Database connection configuration
├── controllers/        # Route controllers
│   ├── contactController.js
│   ├── notificationController.js
│   ├── requestController.js
│   ├── ticketController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js # Authentication middleware
├── routes/             # API routes
│   ├── contactRoutes.js
│   ├── notificationRoutes.js
│   ├── requestRoutes.js
│   ├── ticketRoutes.js
│   └── userRoutes.js
├── .env                # Environment variables (not included in repo)
├── package.json        # Project metadata and dependencies
└── server.js          # Main application file
```

## 🔧 Setup and Installation

1. Clone the repository
```bash
git clone https://github.com/servetisikli/offnedietur-mern-backend-public-version.git
cd offnedietur-mern-backend-public-version
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
NODE_ENV=development
CLIENT_URL=http://localhost:5173
EMAIL_SERVICE=your_email_service
EMAIL_USERNAME=your_email
EMAIL_PASSWORD=your_email_password
BREVO_API_KEY=your_brevo_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. Start the server
```bash
npm start
```

## 🌐 API Endpoints

### User Routes
- `POST /api/user/register` - Register a new user
- `GET /api/user/verify-email/:token` - Verify email address
- `POST /api/user/login` - Login user
- `POST /api/user/logout` - Logout user
- `POST /api/user/resend-verification-email` - Resend verification email
- `POST /api/user/forgot-password` - Request password reset
- `PATCH /api/user/reset-password/:token` - Reset password
- `GET /api/user/me` - Get user profile (protected)
- `GET /api/user/admin` - Admin access (protected + admin role)
- `POST /api/user/refresh-token` - Refresh authentication token

### Contact Routes
- `POST /api/contact` - Send contact message

### Request Routes
- `POST /api/request/sent` - Create a travel request (protected)
- `GET /api/request` - Get user requests (protected)
- `GET /api/request/all` - Get all requests (admin only)

### Ticket Routes
- `POST /api/tickets` - Create support ticket (protected)
- `GET /api/tickets/my-tickets` - Get user tickets (protected)
- `GET /api/tickets/all` - Get all tickets (admin only)
- `POST /api/tickets/:ticketId/respond` - Add response to ticket (admin only)
- `PUT /api/tickets/:ticketId/close` - Close ticket (admin only)

### Notification Routes
- `POST /api/notifications` - Create notification (admin only)
- `GET /api/notifications/:userId` - Get user notifications (protected)
- `PATCH /api/notifications/:notificationId/read` - Mark notification as read (protected)

## 👨‍💻 Author

- **Servet Isikli** - [GitHub Profile](https://github.com/servetisikli)

## 📅 Last Updated

- Date: 2025-04-17
- By: servetisikli

## 🔗 Links

- [OffnedieTur Website](https://offnedietur.de)
- [Repository](https://github.com/servetisikli/offnedietur-mern-backend-public-version)
