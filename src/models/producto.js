import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 50
    },
    precio:{
        type: Number,
        required: true
    },
    detalle:{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    }
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;
