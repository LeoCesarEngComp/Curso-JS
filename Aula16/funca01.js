function parImp(n) {
    if (n % 2 == 0) {
        return `O número ${n} é PAR!`
    } else {
        return `O número ${n} é IMPAR!`
    }
}

let res = parImp(10)

console.log(res)

console.log(parImp(223))