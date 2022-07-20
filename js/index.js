

/* Hamburger to X Animation */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
});

document.querySelectorAll(".navMenu", "li").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("active");
}));

$(".skillText").click(function(){
    $(this).find(".skillList_grid").toggleClass("skill-active");
    $(this).siblings(".skillTitle").find(".skillList_grid").removeClass("skill-active");
    if ($(".skillList_grid").hasClass("skill-active")) {
        $(".plusIcon").removeClass("fa-plus").addClass("fa-minus");
    }
    else {
        $(".plusIcon").removeClass("fa-minus").addClass("fa-plus");
        }
});

$(".appText").click(function(){
    $(this).find(".appList_grid").toggleClass("app-active");
    $(this).siblings(".appTitle").find(".appList_grid").removeClass("app-active");
    if ($(".appList_grid").hasClass("app-active")) {
        $(".app-plusIcon").removeClass("fa-plus").addClass("fa-minus");
    }
    else {
        $(".app-plusIcon").removeClass("fa-minus").addClass("fa-plus");
        }
});

$(".intText").click(function(){
    $(this).find(".intList_grid").toggleClass("int-active");
    $(this).siblings(".intTitle").find(".intList_grid").removeClass("int-active");
    if ($(".intList_grid").hasClass("int-active")) {
        $(".int-plusIcon").removeClass("fa-plus").addClass("fa-minus");
    }
    else {
        $(".int-plusIcon").removeClass("fa-minus").addClass("fa-plus");
        }
});

document.querySelectorAll('.navLink').forEach(link => {
    if(link.href === window.location.href) {
     link.setAttribute('aria-current', 'page')
    }
 })