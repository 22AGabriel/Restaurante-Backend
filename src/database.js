import mongoose from "mongoose";

const url = 'mongodb://127.0.0.1:27017/sham'

mongoose.connect(url);

const conexion = mongoose.connection;

conexion.once('open', ()=>{
    console.log('base de dato conectada');
})