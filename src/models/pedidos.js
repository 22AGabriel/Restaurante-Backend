import mongoose, { Schema } from "mongoose";

const pedidoSchema = new Schema({
  usuario: {
    type: String,
    required: true,
  },
  productos: {
    type: String,
    required: true,
  },
  fecha: {
    type: Number,
    required: true,
  },
  estado: { type: String, required: true },
});

export const Pedido = mongoose.model('pedido', pedidoSchema);
