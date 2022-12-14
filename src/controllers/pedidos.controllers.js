import { validationResult } from "express-validator";
import { Pedido } from "../models/pedidos";

export const crearPedido = async(req,res)=>{
    try{  
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errores: errors.array()
            })
        }
        const nuevoPedido = new Pedido(req.body);
        await nuevoPedido.save();
        res.status(201).json({
            mensaje: 'se creo el nuevo pedido con exito'
        });
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'ocurrio un error al intentar crear el pedido'
        })
    }
}

export const listarPedidos = async(req, res)=>{
    try{
        const pedidos = await Pedido.find();
        res.status(200).json(pedidos);
    }catch(error){
        console.log(error);
        res.status(404).json({
          mensaje: 'Error al buscar los pedidos'
        })
    }
}

export const obtenerPedidos = async(req, res)=>{
    try{
        console.log(req.params.id)
        const pedidoBuscado = await Pedido.findById(req.params.id);
        res.status(200).json(pedidoBuscado);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se encontro el pedido buscado'
        })
    }
}

export const editarPedido = async(req, res)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errores: errors.array()
            })
        }
        await Pedido.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje: 'El pedido fue editado correctamente'
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al intentar editar un pedido'
        })
    }
}

export const borrarPedido = async(req,res)=>{
    try{    
        await Pedido.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje:'Se borro correctamente el pedido'
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje:'No se pudo eliminar el pedido'
        })
    }
}