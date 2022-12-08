import express from 'express';
const router = express.Router();

//importar el modelo
import PrimerBd from '../models/primerBd'

//agregar registro
router.post('/nuevo-registro', async(req,res)=>{
    const body = req.body;
    try{
        const PrimerDB = await PrimerBd.create(body);
        res.status(200).json(PrimerDB);
    }catch(error){
        return res.status(500).json({
            mensaje:'Ocurrió algo inesperado en el servidor',
            error
        })
    }
});

// buscar todos los registros
router.get('/buscarTodo',async(req,res)=>{
    try{
        const PrimerDb=await PrimerBd.find();
        res.json(PrimerDb);
    }catch(error){
        return res.status(400).json({mensaje:'Error en la busqueda',error})
    }
});

// buscar por parametro
router.get('/buscarParametro/:id',async(req,res)=>{
    const _id = req.params.id;
     try{
           
            const PrimerDb=await PrimerBd.findOne({_id});
            res.json(PrimerDb);
        }catch(error){
            return res.status(400).json({mensaje:'Error en la busqueda de parametro',error})
        }
    });

// eliminar por paramtro
router.delete('/eliminarParametro/:id',async(req,res)=>{
    const _id = req.params.id;
     try{
           
            const PrimerDb=await PrimerBd.findByIdAndDelete({_id});
            if(!PrimerDb){
            return res.status(400).json({
                mensaje: 'No se encontró registro', 
                error
                    })
        }
        res.json(PrimerDb)
    
        }catch(error){
            return res.status(400).json({mensaje:'Error en la busqueda de parametro',error})
        }
});

// actualizar por parametro
router.put('/actualizar/:id',async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;    
     try{           
            const PrimerDb=await PrimerBd.findByIdAndUpdate(_id, body,{new:true});
            res.json(PrimerDb);
        }catch(error){
            return res.status(400).json({mensaje:'Error al actualizar',error})
        }
    });
    


//esportar cfg de express para que peuda ser usado
module.exports=router;