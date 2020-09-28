import mongoose from 'mongoose';
const { Schema } = mongoose;

const vehicleSchema = new Schema({
  veiculo: {
    type: String,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  ano: {
    type: Number,
    required: true,
  },
  descricao: String,
  vendido: {
    type: Boolean,
    default: false
  },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const vehicle = mongoose.model('veiculos', vehicleSchema)
export { vehicle }
