require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");

const app = express(); 

const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL

// middleware
app.use(express.json())
// app.use(express.urlencoded{(extended: false)}) -> use this middleware when we use form url encoded

//routes
app.use('/api', productRoute )

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello, this is blog page')
})


mongoose.set("strictQuery", false)
mongoose.
connect('MONGO_URL')
.then(() => {
    app.listen(PORT, () => {
        console.log(`Node API app is running on port ${PORT}`)
    })
    console.log('Connect to moongoDB')
}).catch((error) => {
    console.log(error)
})


// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();

// // Middleware
// app.use(express.json());

// // routes
// app.get("/", (req, res) => {
//   res.send("Hello NODE API");
// });

// app.post("/blog", (req, res) => {
//   console.log("data from from:", req.body);
//   res.status(200).json({
//     message: "send success message",
//     status: false,
//   });
// });

// const mongoUrl = process.env.MONGO_URL;

// mongoose
//   .connect(mongoUrl)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Node API app is running on port http://localhost:${PORT}`);
// });
