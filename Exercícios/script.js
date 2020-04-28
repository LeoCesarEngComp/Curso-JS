function calcular() {
    let nome = window.prompt('Qual o nome do aluno?')
    let nota1 = Number(window.prompt(`Qual a primeira nota de ${nome}?`))
    let nota2 = Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}? `))
    let media = (nota1 + nota2) / 2
    let res = document.getElementById('res')
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark></p>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark></p>`
}
