const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors({
  origin: 'https://leaderboard-frontend-three.vercel.app',  // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],      // Include OPTIONS for preflight requests
  allowedHeaders: ['Content-Type', 'Authorization'],         // Include the required headers
  credentials: true                                          // Enable if you're working with cookies
}));

// Enable preflight requests for all routes
app.options('*', cors());
app.use(bodyParser.json());
// app.options('*', cors());

// Routes
app.use('/api', require('./routes/users'));
app.use('/api', require('./routes/claims'));
app.use('/api', require('./routes/leaderboard'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req,res)=>{
  res.json("hello Duniya");
})


