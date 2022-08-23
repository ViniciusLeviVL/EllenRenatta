const phrases = {
    20220823: "olá",
}
const date = new Date
const data = {
    dd: date.getDate(),
    mm: date.getMonth() + 1,
    aaaa: date.getFullYear(),
    // retorna a data atual no mesmo formato do input calendar
    date: function() {
        let mms = String(this.mm).length
        if (mms == 1) {
            this.mm = "0"+this.mm
        }
        let data = this.aaaa + "-" + this.mm + "-" + this.dd
        return data
    },
}
function replacehifen(valor) {
    return valor.replace(/-/g,"")
}
const c = document.getElementById("calendar")
const frase = document.getElementById("frase")
c.value = data.date()
function calendario() {
    if (c.value == data.date()) {
        window.alert('Este dia é hoje')
    } else {
        window.alert(c.value)
    }
}
frase.innerText = phrases.replacehifen(c.value)
