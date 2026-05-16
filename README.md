BOOK MY SHOW - FULL STACK MERN APPLICATION

PROJECT OVERVIEW
Book My Show is a full-stack movie ticket booking web application developed using the MERN stack architecture. The application allows users to:
1. Select movies
2. Choose time slots
3. Select seats
4. Book tickets
5. View last booking details
The project follows a modular and scalable folder structure for both frontend and backend development.

TECH STACK
FRONTEND
1. React.js
2. Vite
3. JavaScript
4. CSS
5. Axios
6. React Bootstrap

BACKEND
8. Node.js
1. Express.js
2. MongoDB
3. Mongoose
4. dotenv
5. CORS

PROJECT ARCHITECTURE
Frontend (React + Vite)
        │
        │ REST API Calls
        ▼
Backend (Node.js + Express)
        │
        │ Database Operations
        ▼
MongoDB Database

FOLDER STRUCTURE
Book-My-Show/
│
├── client/                         # Frontend
│   │
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   │
│   │   ├── assets/                # Images and icons
│   │   │
│   │   ├── components/            # Reusable components
│   │   │   ├── Loader.jsx
│   │   │   ├── SelectMovie.jsx
│   │   │   ├── SelectSeats.jsx
│   │   │   ├── SelectTimeSlot.jsx
│   │   │   └── LastBookingDetails.jsx
│   │   │
│   │   ├── pages/                 # Application pages
│   │   │   └── Home.jsx
│   │   │
│   │   ├── hooks/                 # Custom React hooks
│   │   │   └── useLocalStorage.js
│   │   │
│   │   ├── services/              # API services
│   │   │   └── api.js
│   │   │
│   │   ├── styles/                # CSS files
│   │   │
│   │   ├── utils/                 # Helper functions and constants
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
│
├── server/                        # Backend
│   │
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   │
│   ├── controllers/               # Business logic
│   │
│   ├── models/                    # MongoDB models
│   │   └── Booking.js
│   │
│   ├── routes/                    # API routes
│   │
│   ├── middleware/                # Custom middleware
│   │
│   ├── server.js                  # Main server file
│   ├── .env
│   └── package.json
│
└── README.md

FRONTEND INFRASTRUCTURE
The frontend is developed using React and Vite for fast development and optimized builds.

MAIN FEATURES
1. Component-based architecture
2. Reusable UI components
3. Dynamic seat selection
4. Movie and slot selection
5. Booking details display
6. API integration with backend

Backend Infrastructure
The backend is developed using Node.js and Express.js.

MAIN FEATURES
1. REST API architecture
2. MongoDB database integration
3. Booking management
4. Error handling
5. Middleware support
6. Scalable backend structure

FRONTEND WORKFLOW
User Interface
      ↓
React Components
      ↓
API Service Calls
      ↓
Backend APIs

BACKEND WORKFLOW
Routes
   ↓
Controllers
   ↓
Models
   ↓
MongoDB Database

DATABASE STRUCTURE
BOOKING MODEL EXAMPLE
{
   movie: String,
   slot: String,
   seats: Array,
   user: String,
   bookingTime: Date
}

INSTALLATION AND SETUP
CLONE REPOSITORY
git clone <repository-url>

FRONTEND SETUP
cd client
npm install
npm run dev

FRONTEND RUNS ON
http://localhost:5173

BACKEND SETUP
cd server
npm install
npm start

BACKEND RUNS ON 
http://localhost:8080

ENVIRONMENT VARIABLES
FRONTEND .env
VITE_API_URL=http://localhost:8080/api

BACKEND .env
PORT=8080
MONGO_URI=your_mongodb_connection_string

API ENDPOINTS
| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | /api/bookings     | Get all bookings  |
| POST   | /api/bookings     | Create booking    |
| GET    | /api/bookings/:id | Get booking by ID |
| DELETE | /api/bookings/:id | Delete booking    |

AVAILABLE SCRIPTS
FRONTEND 
START DEVELOPMENT SERVER
npm run dev

BUILD FOR PRODUCTION
npm run build

BACKEND
START SERVER
npm start

RUN WITH NODEMON
npm run server

FEATURES 
1. Movie selection
2. Time slot selection
3. Seat booking system
4. Booking history
5. Responsive UI
6. REST API integration
7. MongoDB database storage
8. Modular architecture

FUTURE ENHANCEMENTS
1. User authentication
2. JWT authorization
3. Payment gateway integration
4. Admin dashboard
5. Real-time seat availability
6. Email notifications
7. Redux Toolkit integration
8. Docker deployment
9. Cloud hosting

DEPLOYMENT
FRONTEND DEPLOYMENT
1. Vercel

BACKEND DEPLOYMENT 
1. RENDER

DATABASE HOSTING
1. MongoDB Atlas

ADVANTAGES OF THIS STRUCTURE 
1. Clean and organized codebase
2. Easy maintenance
3. Scalable architecture
4. Better debugging
5. Production-ready structure
6. Separation of concerns
7. Reusable components and modules

CONCLUSION 
This project demonstrates a complete MERN stack application with proper frontend and backend architecture. The structure is designed for scalability, maintainability, and real-world deployment. The application follows modern development practices and can be extended with advanced features in the future.
