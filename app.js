import express from "express";
import exphbs from "express-handlebars"; 
import mongoose from "mongoose";
import dotenv from "dotenv";
import __dirname from "./utils"

import viewsRouter from "./src/routes/views.router.js"

dotenv.config();

const app = express();

const uriConexion = process.env.URLMONGODB;

mongoose.connect (uriConexion);


app.use(express.static(__dirname +'/src/public'));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set('views', __dirname + '/views');

app.use('/',viewsRouter);

app.listen(8080, () => console.log("listening on PORT 8080"));


