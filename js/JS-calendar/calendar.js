    // checa se a data tá no formato ideal (length == 2)
    function checkLength(info) {
        if (String(info).length == 1) {
            info = "0"+info
        }
        return info
    }
// declaração das constantes referentes as datas
const date = new Date
const data = {

    ddn: date.getDate(),
    mmn: date.getMonth() + 1,
    aaaan: date.getFullYear(),
    dds: String(checkLength(date.getDate())),
    mms: String(checkLength(date.getMonth() + 1)),
    aaaas: String(date.getFullYear()),
    // checa se a data tá no formato ideal (length == 2)
    checkLength: function (info) {
        if (String(info).length == 1) {
            info = "0"+info
        }
        return info
    },
    // retorna a data atual no mesmo formato do input calendar
    date: function () {
        this.dds = this.checkLength(this.dds)
        this.mms = this.checkLength(this.mms)
        return this.aaaas + "-" + this.mms + "-" + this.dds
    },
    // retorna a data no formato brasileiro
    dateBR: function () {
        return this.dds + "-" + this.mms + "-" + this.aaaas
    },

    // subtrai a data selecionada por dias marcantes
    sinceDate: function (aa,mm,dd) {
        let since = data.aaaas - aa + " ano(s) atrás "
        if (mm != undefined) {
            since = data.aaaas - aa + " ano(s) " + data.mms - mm + " mes(es) atrás "
        } 
        if (dd != undefined) {
            since = data.aaaas - aa + " ano(s) " + data.mms - mm + " mes(es) " + data.dds - dd + " dia(s) atrás "
        }
        if (since == "0 ano(s) atrás " || since == "0 ano(s) 0 mes(es) atrás " || since == "0 ano(s) 0 mes(es) 0 dia(s) atrás ") {
            since = "Neste dia "
        } 
        return since
    },
    // avança ou retrocede um dia
    changeDateBtn: function(btn) {
        if (btn == "next") {
            this.ddn += 1
            this.dds = String(this.ddn)
            if (this.ddn > this.maxDay(this.mmn)) {
                this.mmn += 1
                this.mms = String(this.mmn)
                this.ddn = 1
                this.dds = String(this.ddn)
                if (this.mmn > 12) {
                    this.aaaan += 1
                    this.aaaas = String(this.aaaan)
                    this.mmn = 1
                    this.mms = String(this.mmn)
                }
            }
        }
        if (btn == "prev") {
            this.ddn -= 1
            this.dds = String(this.ddn)
            if (this.ddn < 1) {
                this.mmn -= 1
                this.mms = String(this.mmn)
                this.ddn = this.maxDay(this.mmn)
                this.dds = String(this.ddn)
                if (this.mmn < 1) {
                    this.aaaan -= 1
                    this.aaaas = String(this.aaaan)
                    this.mmn = 12
                    this.mms = String(this.mmn)
                }
            }
        }
        return this.date()
    },
    maxDay: (n) => {
        let maxDay = 31
        if (n === 4 ||
            n === 6 ||
            n === 9 ||
            n === 11) {
            maxDay = 30
        }
        if (n === 2) {
            maxDay = 28
        }
        return maxDay
    },
    $365i: function() {
        let i365 = 0
        if (this.mmn > 1) {
            for (let i = 1; i < this.mmn; i++) {
                i365 += this.maxDay(i)
            }
        }
        i365 += this.ddn
        return i365
    }
}

console.log(data.$365i())





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

        date += '\n$' + String(data.checkLength(month)) + String(data.checkLength(day))+ ':' + praises[i]
        i++
    }
    return date

}

console.log(abc()) */