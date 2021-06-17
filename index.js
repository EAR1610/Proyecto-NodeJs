import express, { request } from 'express'
import router from './routes/index.js'
import db from './config/db.js'

const app = express();

//Conectar a la bd
db.authenticate()
    .then( () => console.log('Base de datos conectada...') )
    .catch( error => console.log(error) );

//Definir el puerto
const port = process.env.PORT || 5000;

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use( (req, res, next) => {
    
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencias de Viajes";
    next();

});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded( { extended: true } ) );

//Definir la carpeta publica
app.use(express.static('public'));

//Agregar router
app.use('/', router);   //use soporta: get, post, put patch and delete

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})