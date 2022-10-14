
// declaração das constantes referentes as datas
const date = new Date
const data = {
    dd: String(date.getDate()),
    mm: String(date.getMonth() + 1),
    aaaa: String(date.getFullYear()),
    // checa se a data tá no formato ideal (length == 2)
    checkLenght: function (info) {
        if (String(info).length == 1) {
            info = "0"+info
        }
        return info
    },
    // retorna a data atual no mesmo formato do input calendar
    date: function () {
        this.dd = this.checkLenght(this.dd)
        this.mm = this.checkLenght(this.mm)
        return this.aaaa + "-" + this.mm + "-" + this.dd
    },
    // retorna a data no formato brasileiro
    dateBR: function () {
        return this.dd + "-" + this.mm + "-" + this.aaaa
    },

    // subtrai a data selecionada por dias marcantes
    sinceDate: function (aa,mm,dd) {
        let since = data.aaaa - aa + " ano(s) atrás "
        if (mm != undefined) {
            since = data.aaaa - aa + " ano(s) " + data.mm - mm + " mes(es) atrás "
        } 
        if (dd != undefined) {
            since = data.aaaa - aa + " ano(s) " + data.mm - mm + " mes(es) " + data.dd - dd + " dia(s) atrás "
        }
        if (since == "0 ano(s) atrás " || since == "0 ano(s) 0 mes(es) atrás " || since == "0 ano(s) 0 mes(es) 0 dia(s) atrás ") {
            since = "Neste dia "
        } 
        return since
    },
    // avança ou retrocede um dia
    changeDateBtn: function(btn) {
        if (btn == "next") {
            let ddn = Number(this.dd)
            ddn += 1
            this.dd = String(ddn)
            if (ddn > 31) {
                let mmn = Number(this.mm)
                mmn += 1
                this.mm = String(mmn)
                this.dd = "01"
                if (mmn > 12) {
                    let aaaan = Number(this.aaaa)
                    aaaan += 1
                    this.aaaa = String(aaaan)
                    this.mm = "01"
                }
            }
        }
        if (btn == "prev") {
            let ddn = Number(this.dd)
            ddn -= 1
            this.dd = String(ddn)
            if (ddn < 1) {
                let mmn = Number(this.mm)
                mmn -= 1
                this.mm = String(mmn)
                this.dd = "31"
                if (mmn < 1) {
                    let aaaan = Number(this.aaaa)
                    aaaan -= 1
                    this.aaaa = String(aaaan)
                    this.mm = "12"
                }
            }
        }
        return this.date()
    }
}

/* function abc() {
    let date;
    let day = 0
    let month = 1
    let i = 1
    while (i < 384) {
        day += 1
        if (day > 31) {
            day = 0
            month += 1
        }

        date += '\n$' + String(data.checkLenght(month)) + String(data.checkLenght(day))+ ':' + praises[i]
        i++
    }
    return date

}

console.log(abc()) */