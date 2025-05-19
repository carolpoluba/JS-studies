function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //fullyear pega 4 dígitos
    var formsano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (formsano.value.length == 0 || (formsano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formssex = window.document.getElementsByName('radsex')
        var idade = ano - Number(formsano.value)
    }
}