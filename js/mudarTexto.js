document.querySelector(".phrase nav ul li:nth-child(1)").addEventListener("click", function () {
    c.value = data.changeDateBtn("prev")
    frase.querySelector("p:nth-child(1)").innerText = data.dateBR()
    frase.querySelector("p:nth-child(3)").innerText = phrases.datas()
})
document.querySelector(".phrase nav ul li:last-of-type").addEventListener("click", function () {
    c.value = data.changeDateBtn("next")
    frase.querySelector("p:nth-child(1)").innerText = data.dateBR()
    frase.querySelector("p:nth-child(3)").innerText = phrases.datas()
})
c.addEventListener("focusout", function () {
    data.calendarChangeDate()
    frase.querySelector("p:nth-child(1)").innerText = data.dateBR()
    frase.querySelector("p:nth-child(3)").innerText = phrases.datas()
}) 
{ // checa se a data foi alterada
    let date = data.date()
    function changeDate() {
        if (date != data.date()) {
            frase.querySelector("p:nth-child(2)").innerText = getPraise()
        }
        date = data.date()
    }
}
setInterval(changeDate, 1)