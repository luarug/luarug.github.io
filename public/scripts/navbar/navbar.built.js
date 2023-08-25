window.addEventListener("scroll", function(){

    var globalnav = document.querySelector(".globalnav");
    var mobileglobalnav = document.querySelector(".mobile-globalnav");

    globalnav.classList.toggle("globalnav_fixed", window.scrollY > 0);
    mobileglobalnav.classList.toggle("mobile_globalnavbar_fixed", window.scrollY > 0);
});