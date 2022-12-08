const express = require('express');

const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

//conexion local a base de de datos mongodb://localhost:27017/

//conexión remota a la web de mongodb
const mongoose = require('mongoose');
const url = 'mongodb+srv://edutechs_javieregm:kID2xhieY$U2@cluster0.l2fgml5.mongodb.net/misiontic?retryWrites=true&w=majority';

const options = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(url,options).then(()=>{console.log('Conectado a mongo')},err => {err});


//middleware - aplicaciones intermediarias entre el fronted y el backed

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//ruta de prueba
//app.get('/', function(req,res){
//res.send('Hola mundo')
//});

//middleware para VueJS -  la apli sera llamada desde http:localhost:3000/api

app.use('/api',require('./routes/primerBd'));
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));

app.set('puerto',process.env.PORT || 3000)
app.listen(app.get('puerto'),function(){
    console.log('Escuchando el puerto: ' + app.get('puerto'));
    }
    );