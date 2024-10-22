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
app.use(cors(
  {
  origin: 'https://leaderboard-frontend-iontmoh2q-kumarniket924-gmailcoms-projects.vercel.app', // Replace with your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Specify allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Specify allowed headers
}));
  }
));
app.use(bodyParser.json());

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


