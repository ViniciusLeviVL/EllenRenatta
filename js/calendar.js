const c = document.getElementById("calendar")
// declaração das constantes referentes as datas
const date = new Date
const data = {
    dd: date.getDate(),
    mm: date.getMonth() + 1,
    aaaa: date.getFullYear(),
    // retorna a data atual no mesmo formato do input calendar
    date: function () {
        let mms = String(this.mm).length
        if (mms == 1) {
            this.mm = "0"+this.mm
        }
        let dds = String(this.dd).length
        if (dds == 1) {
            this.dd = "0"+this.dd
        }
        let data = this.aaaa + "-" + this.mm + "-" + this.dd
        return data
    },
    // avança um dia
    next: function(nextDay,daysFull,monthsFull) {
        if (nextDay == true) {
            let ddn = Number(this.dd)
            ddn += 1
            this.dd = String(ddn)
            if (ddn > 31) {
                c.value = this.next(false,true)
            }
        }
        if (daysFull == true) {
            let mmn = Number(this.mm)
            mmn += 1
            this.mm = String(mmn)
            this.dd = "01"
            if (mmn > 12) {
                c.value = this.next(false,false,true)
            }
        }
        if (monthsFull == true) {
            let aaaan = Number(this.aaaa)
            aaaan += 1
            this.aaaa = String(aaaan)
            this.mm = "01"
        } 
        return this.date()
    },
    // retrocede um dia
    prev: function(nextDay,daysFull,monthsFull) {
        if (nextDay == true) {
            let ddn = Number(this.dd)
            ddn -= 1
            this.dd = String(ddn)
            if (ddn < 1) {
                c.value = this.prev(false,true)
            }
        }
        if (daysFull == true) {
            let mmn = Number(this.mm)
            mmn -= 1
            this.mm = String(mmn)
            this.dd = "31"
            if (mmn < 1) {
                c.value = this.prev(false,false,true)
            }
        }
        if (monthsFull == true) {
            let aaaan = Number(this.aaaa)
            aaaan -= 1
            this.aaaa = String(aaaan)
            this.mm = "12"
        } 
        return this.date()
    },
}
c.value = data.date()
document.querySelector(".phrase nav ul li:nth-child(1)").addEventListener("click", function () {
    c.value = data.prev(true)
})
document.querySelector(".phrase nav ul li:nth-child(3)").addEventListener("click", function () {
    c.value = data.next(true)
})

/*
function replacehifen(valor) {
    return valor.replace(/-/g,"")
}
*/
const phrases = {
    20220823: "olá",
}
const frase = document.getElementById("frase")