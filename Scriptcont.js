function contar () {
    var ini = document.getElementById ('txti')
    var fim = document.getElementById ('txtf')
    var passo = document.getElementById ('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert ('Insira em todos os campos algum número para contar!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contado: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f) {
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
             } 
             res.innerHTML += `\u{1F3C1}`
        } else {
            for (var c =i; c >=f; c -=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }res.innerHTML += `${c} \u{1F3C1}`
     
    } 
}