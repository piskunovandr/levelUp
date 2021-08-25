$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        slidesToShow: 1,
    })
    const CountDownEl = $("#timer");
    let time = 1800; //1800 секунд

    setInterval(() => {
        const Minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        document.getElementById('timer').innerHTML = `${Minutes}:${seconds}`;
        time--;
        if (Minutes == 0 && seconds == 0) {
            time = 1800;
        }
    }, 1000);

    $('.form__btn').on('click', function (event) {
        event.preventDefault();
        $('.message').fadeIn();
        $('.message').delay(3000).fadeOut();
    });

    $(".form__input-1").focus(function () {
        $('.name__label').fadeIn();
        $('.name__label').delay(3000).fadeOut();
    });

    $(".form__input-2").focus(function () {
        $('.phone__label').fadeIn();
        $('.phone__label').delay(3000).fadeOut();
    });
})


