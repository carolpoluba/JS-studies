let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //vetor p/ analisar os dados


function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    //-1 indica que o valor não foi encontrado na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    //só add se for um número e ele não estiver em lista (vdd os 2)
    if(isNum(num.value) && !inLista(num.value, valores)) {
    } else {
        window.alert('Valor inválido ou já presente na lista.')
    }
}