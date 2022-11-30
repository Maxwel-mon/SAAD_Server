var massege = ' hello world';
console.log(massege);

const cors = require('cors');
const corsOptions ={

  origin : '*',
  credentials :true,
  optionSuccessStatus:200,
}

const { MongoClient, HostAddress } = require("mongodb");
const { default: test } = require("node:test");
const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');


// Connection URI  //  mongo db 
const uri = "mongodb://127.0.0.1:27017/module";
// Create a new MongoClient
const client = new MongoClient(uri);

const app = express();
//app.use(bodyparser.json());
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
const port = 5000;

// create an express server running on port 5000 

//// routers are importred ,  made and used here

const studentRouter = require('./routes/student.route.js');
const moduleRouter = require('./routes/module.route.js');
const tutorialrouter= require('./routes/tutorial.route.js');
const userrouter= require('./routes/User.route.js');

app.use('/student', studentRouter);
app.use('/module', moduleRouter);
app.use ('/tutorial', tutorialrouter);
app.use ('/user', userrouter);




/////


// start express
app.listen(port, HostAddress, function () {console.log(' Server runing at port ' + port + ' hoseted by' + HostAddress)})



/*async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
  const database = client.db('test');
  //const student = database.collection('')

const query ={ item: 'shoe'};
const movie = await   database.find(query);
    

    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }}//run().catch(console.dir);*/


//  conect to mongodb 
async function main() {if (await mongoose.connect(uri, { useNewUrlParser: true })) console.log("connection to db succesful");else await mongoose.close();}

main().catch(console.dir);