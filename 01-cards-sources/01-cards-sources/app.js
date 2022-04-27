//Создаем константу и получаем масcив из слайдов.
const slides = document.querySelectorAll('.slide')

// При помощи цикла берем слайды из массива.  
for (const slide of slides) {
  // Ставим обработчик,
  slide.addEventListener('click', () => {
    //Удаляем класса active   
    clearActiveClasses()
    //Добавляем класс active на кликнувший слайд
    slide.classList.add('active')
  })
}

// Функция для удаления класса
function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}