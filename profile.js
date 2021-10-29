let colorBtn = document.getElementById('color')
let placeBtn = document.getElementById('place')
let ritualBtn = document.getElementById('ritual')

const alertColor = () => {
    alert("Thanks for clicking! My favorite color is a goldish tan. I think it's smooth, clean, and powerful.")
}

const alertPlace = () => {
    alert("Thanks for clicking! My favorite place is the Netherlands. I was born there but haven't spent much time there, so it's somewhere I aspire to go to more often and hopefully live one day.")
}

const alertRitual = () => {
    alert("Thanks for clicking! My favorite ritual is my morning meditation. I do 1 hour each morning and have been in this routine for nearly 2 years. Fun fact, I haven't missed a day in nearly a year.")
}

colorBtn.addEventListener('click', alertColor)

placeBtn.addEventListener('click', alertPlace)

ritualBtn.addEventListener('click', alertRitual)