import express from 'express';
import renderer from "./helpers"
const app = express();

app.use(express.static('public'));

app.get('*',(req,res)=>{
  res.send(renderer(req)); 
})

app.listen(3000,()=>{
    console.log("Listening to port 3000")
})