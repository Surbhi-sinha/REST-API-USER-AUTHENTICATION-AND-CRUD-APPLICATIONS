import express from 'express';
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from 'mongoose';
import router from './router';
//starting the express app
const app = express();


app.use(cors({
      credentials :true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
//creating a server 
const server = http.createServer(app);

// listening the server at localhost:8080
server.listen(8080,()=>{
      console.log("server running on http://localhost:8080");
});


const mongoURL ="mongodb+srv://surbhisinha1:surb1234@cluster0.l1gs7a0.mongodb.net/?retryWrites=true&w=majority"

//initiating our mongoose
mongoose.Promise = Promise;
mongoose.connect(mongoURL);
mongoose.connection.on('error', (error:Error) => console.log(error));
console.log("hello server :)")
// surb1234

app.use('/',router());


