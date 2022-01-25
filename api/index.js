const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts')

const app = express();


// Configurations
dotenv.config();
app.use(express.json());


// DB Connection
mongoose.connect(process.env.MONGO_URL,
   { useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(console.log('connected to MONGO DB'))
.catch((err) => console.log(err))


// Middle wares
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

app.listen('5000', (req, res) => {
    console.log('Backend listening to PORT: 5000')
});



