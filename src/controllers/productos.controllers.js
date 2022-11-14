import Producto from '../models/producto';

//get
export const listaProductos = async(req,res)=>{
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        res.status(404).json({
            mensaje: 'Error al buscar los productos'
        });
    }
};
//get
export const obtenerProductos = async(req, res) => {
    try{
        console.log(req.params.id)
        const productoBuscado = await Producto.findById(req.params.id);
        res.status(200).json(productoBuscado);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'Error no se encontro el producto buscado'
        });
    }
};



