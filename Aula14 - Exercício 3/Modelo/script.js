function contar() {
    
let inicio = window.document.getElementById('txtInicio')
let fim = window.document.getElementById('txtFim')
let passo = window.document.getElementById('txtPasso')
let resultado = window.document.getElementById('res')
if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Faltam dados!')
} else {
    resultado.innerHTML = `Contando:`
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {
        p = 1
        window.alert('Passo inválido! Considerando PASSO 1')
        
    }
    if (i < f) {//contagem crescente
        for(let c = i; c <= f; c += p){
            resultado.innerHTML += ` ${c} \u{1F449}`
        }
        resultado.innerHTML += `\u{1F3C1}`
    } else {//contagem regressiva
        for(let c = i; c >= f; c -= p) {
            resultado.innerHTML += ` ${c} \u{1F449}`
        }
        resultado.innerHTML += `\u{1F3C1}`
    }    
}
}