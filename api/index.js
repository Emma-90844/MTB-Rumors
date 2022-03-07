const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path")
const  bodyParser = require('body-parser')

// ROUTES.
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

const app = express();

// CONFIGURATIONS.
dotenv.config();
app.use(express.json());


app.use("/images", express.static(path.join(__dirname, "/images")));




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




// DB Connection.
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify:true
  })
  .then(console.log("connected to MONGO DB"))
  .catch((err) => console.log(err));

//MULTER image store.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been downloaded");
});

// MIDDLE wares
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


// SERVE STATIC ASSETS FOLDER
if(process.env.NODE_ENV === 'production'){
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen("5000", (req, res) => {
  console.log("Backend listening to PORT: 5000");
});
