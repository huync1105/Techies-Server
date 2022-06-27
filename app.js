const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors());

//router
const loginRouter = require('./routers/login');
app.use('/login', loginRouter);

// listen port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})