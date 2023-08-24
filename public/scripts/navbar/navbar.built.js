window.addEventListener("scroll", function(){

    var globalnav = document.querySelector(".globalnav");
    var navFix = document.querySelector(".globalnav_fixed");
    var mobileglobalnav = document.querySelector(".mobile-globalnav");
    var mobileNavFix = document.querySelector(".mobile-globalnav_fixed");

    globalnav.classList.toggle("none_globalnav", window.scrollY > 0);
    navFix.classList.toggle("globalnavbar_fixedblock", window.scrollY > 0);
    mobileglobalnav.classList.toggle("none_mobile_globalnav", window.scrollY > 0);
    mobileNavFix.classList.toggle("mobile_globalnavbar_fixedblock", window.scrollY > 0);
});