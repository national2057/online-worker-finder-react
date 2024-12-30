require("dotenv").config();
const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const { connectDB } = require("./utils/db");
// const { createUser } = require("./controller/user.controller");
const userRouter = require('./routes/user.routes');
const categoryRouter = require('./routes/category.routes');
const jobRouter = require('./routes/job.routes');
const applicationRouter = require('./routes/application.routes');

const app = express();


// bodyParser / middleware 
app.use(express.json());         // to parse req.body
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
// const corsOptions = {
//    origin: "http//localhost:3000",
//    credentials: true
// }
// app.use(cors(corsOptions));
app.use(cors({
   origin: 'http://localhost:3000', // Replace with your frontend URL
   methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'], // Allow specific methods
   credentials: true, // If you want to allow cookies/auth credentials
 }));

// api's
app.use("/api/v1/users", userRouter.router);
app.use("/api/v1/services", categoryRouter.router);
app.use("/api/v1/jobs", jobRouter.router);
app.use("/api/v1/applications", applicationRouter.router);


const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
   // connectDB();
   connectDB().catch((err) => console.log(err));
   console.log(`Server running at port - (${PORT}).`)
})