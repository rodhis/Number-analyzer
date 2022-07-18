let num = document.querySelector('input#numtxt')
let lista = document.querySelector('select#seltxt')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        if (!valores.length) {
            lista.innerHTML = ''
        }
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Value ${num.value} added.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Invalid or already existing value!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Add values before ending!')
    } else {
        let tot = valores.length

        let [maior, menor] = [Math.max(...valores), Math.min(...valores)]
        let [soma, media] = [0, 0]
        for (let pos in valores) {
            soma += valores[pos]
        }
        media = soma / tot
        
        res.innerHTML = ''
        res.innerHTML += `<p>Overall, there are ${tot} registered numbers.</p>`
        res.innerHTML += `<p>The biggest informed value was ${maior}.</p>`
        res.innerHTML += `<p>The smallest informed value was ${menor}.</p>`
        res.innerHTML += `<p>The sum of all values is ${soma}.</p>`
        res.innerHTML += `<p>The average of all values is ${media}.</p>`
    }
    
} 