
$('.menu').click(() => {
    $('#leftMenu').animate({ 'width': '250px', 'padding': '2rem' }, 300);
    $('.menu').animate({ 'margin-left': '250px' }, 300);
})

$('#closeBtn').click(() => {
    $('#leftMenu').animate({ 'width': '0', 'padding': 0 }, 300);
    $('.menu').animate({ 'margin-left': '0' }, 300);
})

$('#leftMenu a').click(function () {
    let sectionId = $(this).attr('href');
    let sectionPosition = $(sectionId).offset().top;
    $('html,body').animate({ 'scrollTop': sectionPosition }, 2000);
});


let singersH = $(".singers-info h3");

for (let i = 0; i < singersH.length; i++) {
    singersH[i].addEventListener('click', () => {
        $(singersH[i]).siblings('.inner1, .inner').slideToggle(1000);
    });
}


let msg = $("textarea");
let charsRminingNum = $("#charsNum");
let maxChars = charsRminingNum.text();
msg.on("input", () => {
    let currCharsNum = msg.val().length;
    let remaining = maxChars - currCharsNum;
    if (remaining <= 0) {
        charsRminingNum.html(`your available character finished`);
    }
    else {
        charsRminingNum.text(remaining);
    }
});

$(window).on('load', () => {
    countDownToTime('10 october 2025 9:56:00');
});
function countDownToTime(seletedDate) {
    let future = new Date(seletedDate).getTime();
    future = future / 1000;
    let now = new Date().getTime();
    now = now / 1000;

    let diff = future - now;

    let days = Math.floor(diff / (60 * 60 * 24));

    let hours = Math.floor((diff - (days * (24 * 60 * 60))) / (60 * 60));

    let mins = Math.floor((diff - (days * (24 * 60 * 60)) - (hours * 60 * 60)) / 60);

    let secs = Math.floor((diff - (days * (24 * 60 * 60)) - (hours * 60 * 60) - (mins * 60)));

    $('.days').html(`${days} D`);
    $('.hours').html(`${hours} h`);
    $('.mins').html(`${mins} m`);
    $('.secs').html(`${secs} s`);

    setInterval(() => {
        countDownToTime(seletedDate)
    }, 1000);
}








