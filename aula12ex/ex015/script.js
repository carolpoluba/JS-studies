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
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formssex[0].checked) {
            genero = 'Masculino'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', 'babyboy.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'youngman.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adultman.png')
            } else {
                // idoso
                img.setAttribute('src', 'oldman.png')
            }
        } else if (formssex[1].checked) {
            genero = 'Feminino'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', 'babygirl.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'youngwoman.png')
            } else if (idade < 50) {
                // adulta
                img.setAttribute('src', 'adultwoman.png')
            } else {
                // idosa
                img.setAttribute('src', 'oldwoman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi detectado o gênero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}