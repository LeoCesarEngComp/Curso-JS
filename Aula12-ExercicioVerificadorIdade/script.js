function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] - Verifique a data de nascimento informada e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = Number(ano) - Number(fano.value)
        var img = document.createElement('img')//cria local para imagem
        img.setAttribute('id', 'foto')//atribui id=='foto'
        var genero = ''
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebeMenino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemHomem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoHomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'senhorHomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src' , 'bebeMenina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemMulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultaMulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'senhoraMulher.png')
            }
        }
        res.style.textAlign = 'center' //Alinha com JS
        res.innerHTML = `Gênero ${genero}, Idade ${idade} anos!`
        res.appendChild(img)
    }

}