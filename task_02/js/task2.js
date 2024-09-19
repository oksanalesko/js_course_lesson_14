"use strict"
if (confirm("Почати тестування?")) {
   // Крок 0. Введення даних, позначення величин

   let userDate = {
      day: 17,
      month: 3,
      year: 2016
   }
   
   // Крок 1. Обчислення результатів

   function getYearInNMonth({ month, year }, N) {
      let totalMonth = month + N 
      let addYears = Math.floor(totalMonth / 12)
      let extraMonth = totalMonth % 12
      if (extraMonth === 0) {
         extraMonth = 12
         addYears--
      }
      return year + addYears
   }
   let yearInNMonth = getYearInNMonth(userDate, 27)

   // крок 2. Виведення результатів

   document.write(`<div class="container">`)
	document.write(`<p>Через 27 місяців буде ${yearInNMonth} рік</p>`)
	document.write(`</div>`)
}