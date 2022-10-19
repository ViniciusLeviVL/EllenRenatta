const frase = document.querySelector("#frase")
const c = document.getElementById("calendar")

c.value = data.date()


document.querySelector(".phrase nav ul li:nth-child(1)").addEventListener("click", function () {
    c.value = data.changeDateBtn("prev")
    frase.innerHTML = txt.$365[data.$365i() - 1]
})
document.querySelector(".phrase nav ul li:last-of-type").addEventListener("click", function () {
    c.value = data.changeDateBtn("next")
    frase.innerHTML = txt.$365[data.$365i() - 1]
})
c.addEventListener("focusout", function () {
    calendarChangeDate()
    frase.innerHTML = txt.$365[data.$365i() - 1]
}) 

// muda o valor da data de acordo com o valor escrito no input calendar
function calendarChangeDate() {
    data.aaaas = c.value.substring(0, 4)
    data.mms = c.value.substring(5, 7)
    data.dds = c.value.substring(8, 10)
    data.aaaan = Number(data.aaaas)
    data.mmn = Number(data.mms)
    data.ddn = Number(data.dds)
}