const express = require('express')
const app = express();
const dotenv = require('dotenv');
const { dbConnect } = require('./config/database');
const bookRoutes = require('./routes/books')
const PORT = process.env.PORT || 4000;
dotenv.config();

app.use(express.json())

app.use('/books',bookRoutes)


app.listen(PORT, ()=> {
    console.log(`App is running on port ${PORT}`);
})

dbConnect();


app.get('/',(req,res)=>{
    res.json({
        message:"App is running perfectly"
    })
});