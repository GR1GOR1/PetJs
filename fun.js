/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
// Закройте выпадающее меню, если пользователь щелкает за его пределами
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
//----------------HEADER-----------------
//Меняем цвет шапки при прокрутке экрана
    window.addEventListener('scroll', function() {
        var headmenu = document.getElementsByClassName('headmenu');
        
        var posit = window.pageYOffset;
        if (posit > 100){
        
            for (i = 0; i < headmenu.length; i++)
                headmenu[i].classList.add("qwer1")
            
                
        } else {
        
            for (i = 0; i < headmenu.length; i++)
                headmenu[i].classList.remove("qwer1")
            }
        
    });




/* Индекс слайда по умолчанию */
var slideIndex = 1;
document.addEventListener('DOMContentLoaded', function () {
    showSlides(slideIndex);
});

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
