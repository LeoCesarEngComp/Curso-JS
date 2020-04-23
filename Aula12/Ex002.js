var agora = new Date()
var hora = agora.getHours()
if (hora < 4 || hora > 18) {
    console.log('Boa noite!!!')
} else if (hora < 12) {
        console.log('Bom dia!!!')
    } else if (hora <= 18) {
            console.log('Boa tarde!!!')
        }

console.log(`Agora são exatamente ${hora} horas`)
