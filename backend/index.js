require("dotenv").config()
const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const { connectDB } = require("./utils/db");
const app = express();


app.get("/", (req,res,next)=>{
   res.status(200).json({
      message: "Hi, I am Dashboard.",
      success: true
   })
})


// bodyParser / middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOptions = {
   origin: "http//localhost:5173",
   credentials: true
}
app.use(cors(corsOptions));


const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
   connectDB();
   console.log(`Server running at port - (${PORT})`)
})