import Producto from "../models/producto"

//get
export const listarProductos = async(req,res)=>{
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

//POST
export const crearProducto = async (req, res) => {
    try {
      const nuevoProducto= new Producto(req.body);
      await nuevoProducto.save();
      res.status(201).json({
        mensaje: "Se agregó un nuevo producto",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "Ocurrió un error al intentar agregar el nuevo producto",
      });
    }
};


export const editarProducto = async (req,res)=>{
      
  try{
    await Producto.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json({
      mensaje:"el producto pudo ser editaddo correctamente"
  })
  }catch(error){
    console.log(error)
    res.status(400).json({
      mensaje:"error al intentar editar un producto"
    })

  }
}

//DELETE 
export const borrarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "Se eliminó correctamente el producto",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar borrar el producto",
    });
  }
};