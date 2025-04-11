let item = [];

function adicionar(item){
    let item_valido = true;

    if(
        isNaN(item.id) ||
        item.id == null||
        item.id <= 0
    ){
        item_valido = false;
    }

    IntersectionObserver.forEach(item_cadastrado => {
        if (item.id == item_cadastrado.id){
            item_valido = false;
        }
    });

    if(item.nome.length == 0){
        item_valido = false
    }
    if(
        isNaN(item.qtd) ||
        item.qtd == null||
        item.qtd <= 0
    ){
        item_valido = false;
    }

    if(item_valido){
        item.push(item)
    }

    return item_valido;
}

function listar(){
    return
}