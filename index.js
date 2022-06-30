const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express()

// MiddleWare
app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Running")
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qjk5i.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async() =>{
try{
await client.connect();
console.log("connect");
const taskCollection = client.db("endGame").collection('tasks')


}
finally{

}
}
run().catch(console.dir)
app.listen(port,()=>{
    console.log("port is running on ",port)
})