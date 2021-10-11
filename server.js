import express from "express";
import mongoose from 'mongoose';
import boardRouter from "./src/routes/boardRoute.js";
import autoIncrement from 'mongoose-auto-increment';

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// 127.0.0.1:27017
// mongoose.Promise=global.Promise
mongoose.connect('mongodb://localhost:27017/boardDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
// mongoose.connection.on('connected',()=>{
//     console.log("Database Connected Successfully")
// })

   
app.use('/api',boardRouter);

const port = process.env.PORT || 8095;
app.listen(port,()=>console.log("Server started....")); 