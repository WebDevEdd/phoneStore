const topphone = document.getElementById('top-phone');
const btmphone = document.getElementById('bottom-phone');

function phoneImageScroll(){
    window.addEventListener('scroll', function(){
        var windowPosition = Math.round(window.scrollY);
        console.log(windowPosition);
        topphone.style.transform = "translateY(" + windowPosition * -2 + 'px)';
        topphone.style.transition = '0.5s ease';
        btmphone.style.transform = "translateY(" + windowPosition * 2 + 'px)';
        btmphone.style.transition = '0.5s ease';
    })
}
phoneImageScroll();