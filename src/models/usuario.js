import mongoose, {Schema} from 'mongoose';

const usuarioSchema = new Schema({
    nombreUsuario:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    apellidoUsuario:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minLength: 8
    },
    perfil:{
        type: String,
        required: true
    },
    carrito:{
        type: Array,
        required: true
    },
    pedidos:{
        type: Array,
        required: true
    },
    estado:{
        type: String,
        required: true
    }
});

const Usuarios = mongoose.model('usuario', usuarioSchema);
export default Usuarios;