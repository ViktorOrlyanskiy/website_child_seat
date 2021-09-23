"use strict"



/* получаем константы и переменные со страницы */
const buttonsForm = document.querySelectorAll('.form');
const buttonsForm2 = document.querySelectorAll('.form2 button');
const popupBackCall = document.querySelector('.popup__back-call');
const popupCloseButtons = document.querySelectorAll('.thanks-order__button');
const popupThenksOder = document.querySelector('.popup__thenks-oder');




/* Слушаем кнопку с формы1 и включаем попап-спасибо за заказ */
buttonsForm.forEach(element => {
    element.querySelector('button').onclick = (e) => {
        e.preventDefault();
        let InputStr = element.querySelector('input');
        if (InputStr.value.length < 11) {
            InputStr.value = '';
            InputStr.classList.add('error-input');
            alert('Введите номер телефона!')
        } else {
            InputStr.classList.remove('error-input');
            if (element.getAttribute('id') == 1) {
                popupBackCall.classList.remove('active');
                popupThenksOder.classList.add('active');
            } else {
                popupThenksOder.classList.add('active');
            }
        }
        InputStr.value = '';
    }
});

/* !!! отключаем все попапы */
popupCloseButtons.forEach(element => {
    element.onclick = () => {

        popupThenksOder.classList.remove('active');
        popupBackCall.classList.remove('active');
    }
});
/* ------------------------------------------------------------- */

/* Слушаем кнопку с формы2, закОбрЗвон из header и включаем обратный звонок */
buttonsForm2.forEach(element => {
    // console.log(element.querySelector('button'))
    element.onclick = (e) => {
        e.preventDefault();
        popupBackCall.classList.add('active');
    }
})
document.querySelector('.header__back-call').onclick = (e) => {
    e.preventDefault();
    popupBackCall.classList.add('active');
}
/* ------------------------------------------------------------- */

document.querySelector('.footer__link').onclick = () => {
    alert('Упс! Страница не найдена!')
}
// Функция которая превращает HTML изображение в фоновое изображении CSS
function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();
