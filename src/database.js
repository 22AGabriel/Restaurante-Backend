import mongoose from "mongoose";

// Base de datos local
// const url = 'mongodb://127.0.0.1:27017/sham'

// Base de datos en desarrollo
const url = 'mongodb+srv://ShamRestaurante:Sham2022@cluster0.bi2e2br.mongodb.net/restauranteSham'

mongoose.connect(url);

const conexion = mongoose.connection;

conexion.once('open', ()=>{
    console.log('base de dato conectada');
})