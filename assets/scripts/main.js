var hamburgerBtn = document.querySelector(".c-header__hamburger");

headerWrapper = document.querySelector(".c-header-wrapper");

hamburgerBtn.addEventListener("click", function(e) {
    headerWrapper.classList.toggle("js-m-nav--toggled"),
    e.preventDefault()
})
