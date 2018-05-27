var slideNow = 1; //ставим 1, т.к. видим самый первый слайд
var slideCount = $('#slidewrapper').children().length ; //кол-во дочерних эл-тов
var translateWidth = 0; //расстояние на которое будет смещаться slide-wrapper
var slideInterval = 2000; //интервал в ms смены слайдов

// ф-ция для переключения справа налево
function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount){ // проверяем не последний ли сейчас слайд и проверяем на кол-во слайдов
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;

    } else {
        translateWidth = -$('#viewport').width() * (slideNow); // двигаем слайд вслево, поэтому значение со знаком минус!
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

//вызываем ф-цию
$(document).ready(function () {
    var switchInterval = setInterval(nextSlide, slideInterval); //когда страница загрузится вызываем нашу ф-цию с заданным интервалом с помощью втроенной ф-ции setInterval
    //останавливаем прокрутку при hover
    $('#viewport').hover(function() {
        clearInterval(switchInterval); //после hover очищаем интервал в скобках
    },function() { // далее ф-ция, что делать после отвода курсора
        switchInterval = setInterval(nextSlide, slideInterval); //переменная где хранится переодический вызов ф-ции
    });
});


//ф-ция для кнопки предыдущего слайда

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

$('#next-btn').click(function() {
    nextSlide();
});

$('#prev-btn').click(function() {
    prevSlide();
});

// кнопки nav
var navBtnId = 0;

$('.slide-nav-btn').click(function() {
    navBtnId = $(this).index();

    if (navBtnId + 1 != slideNow){
        translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }

});
