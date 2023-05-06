const express = require('express');
const hbs = require("hbs");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/view',()=>{});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definicir rutas para clientes
app.get('/',(req, res)=>{
    res.render('login')
});
app.post('/dashboard',(req,res)=>{
    //Texto
    //    res.send('Aqui va el dash')
    //archivo - HTML
    //    res.sendFile('dashboard.html')
    res.render('dashboard',{
        nombre :"Inosuly Campos",
        correo : "giovannacampos.gc@gmail.com"
    }) //Vista Dinamica -  HTML Dinamico
});

app.get('*',(req, res)=>{
    res.send('404')
})
app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto',port);
})