const headerToggle = document.querySelector(".header-toggle")
const menu = document.querySelector(".header-menu");
headerToggle.addEventListener("click",function() {
    menu.classList.add("is-active");
});
document.addEventListener("click", function(e) {
    if (!menu.contains(e.target) && !e.target.matches(".header-toggle")) {
        menu.classList.remove("is-active");
    }
})