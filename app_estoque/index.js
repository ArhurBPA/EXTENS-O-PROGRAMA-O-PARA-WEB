const express = require('express')
const estoque = require('.estoque')
const app     = express();

app.get('/', (req, res)=>{
    let html = '<h1>app_estoque<h1>'
        html = '<h3>Rotas Disponiveis:<h3>'
        html = '<p>/adicionar/:id/:nome/:qtd<p>'
        html = '<p>/listar<p>'
        html = '<p>/remover/:id<p>'
        html = '<p>/editar/:id/:qtd<p>'
    res.send(html);

});

app.get ('', (req, res)=>{
    let item = {
        id: Number(req.params.id),
        nome: req.params.nome,
        qtd: Number(req.params.qtd)
    };

    res.send(estoque.adicionar(item))
});
app.get ('', (req, res)=>{

});
app.get ('', (req, res)=>{

});
app.get ('', (req, res)=>{

});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT)
})