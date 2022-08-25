const c = document.getElementById("calendar")
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
    // muda o valor da data de acordo com o valor escrito no input calendar
    calendarChangeDate: function () {
        data.aaaa = c.value.substring(0,4)
        data.mm = c.value.substring(5,7)
        data.dd = c.value.substring(8,10)
    },
    // subtrai a data selecionada por dias marcantes
    untilDate: function (aa,mm,dd) {
        let until = data.aaaa - aa + " ano(s) "
        if (mm != undefined) {
            until += data.mm - mm + " mes(es) "
        } 
        if (dd != undefined) {
            until += data.dd - dd + " dia(s) "
        }
        return until
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
c.value = data.date()