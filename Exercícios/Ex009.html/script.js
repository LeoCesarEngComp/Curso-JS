function calcular() {
    let n = Number(window.prompt('Digite um número:'))

    let res = document.querySelector('section#result')
    res.innerHTML = `<p>O número a ser analisado aqui será o <strong>${n}</strong>.<hr></p>`
    res.innerHTML += `<p>O seu valor absoluto é ${Math.abs(n)}.</p>`
    res.innerHTML += `<p>A sua parte inteira é ${Math.trunc(n)}.</p>`
    res.innerHTML += `<p>O valor inteiro mais próximo é ${Math.round(n)}.</p>`
    res.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(n)}.</p>`
    res.innerHTML += `<p>A sua raiz cúbica é ${Math.cbrt(n)}.</p>`
    res.innerHTML += `<p>O valor de ${n}<sup>2</sup> é ${Math.pow(n, 2)}.</p>`
    res.innerHTML += `<p>O valor de ${n}<sup>3</sup> é ${Math.pow(n, 3)}.</p>`
}