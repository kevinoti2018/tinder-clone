import express from 'express';
import mongoose from 'mongoose'
import Cards from './models/dbCards.js'

//app config
    const app = express();
    const port = process.env.PORT||8001
mongoose.connect('mongodb://localhost:27017/tinder')
//middlewares
app.use(express.json())

// const db = mongoose.connection;
// db.on('error', console.error.bind(console,'connection error'));
// db.once('open', () =>{
//     console.log('connected');
// })
//db config

//api endpoints
app.get("/", (req,res)=>res.status(200).send("hello Clever Progremmer!!"));
app.post('/tinder/card',(req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard,(err,data)=>{
        if(err){
           res.status(500).send(err) 
        }else{
            res.status(201).send(data)
        }

    })
});

app.get('/tinder/card',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
           res.status(500).send(err.message) 
        }else{
            res.status(201).send(data)
        }

    })
});


//listener
app.listen(port,()=>console.log(`listening on localhost: ${port}`))