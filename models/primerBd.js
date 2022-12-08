import mongoose from 'mongoose';
const Schema=mongoose.Schema;

const clienteShema = new Schema({
    identificacion: {type: String, required:[true,'Identificación obligatoria']},
    nombre: String,
    apellidos: String,
    direccion: String,
    email: String,
    telefono: String,
date: {type: Date, default: Date.now},
activo: {type: Boolean, default:true}
});

//Covertir modelo
const primerBd=mongoose.model('primerBd',clienteShema);
export default primerBd;