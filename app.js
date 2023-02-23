var navItem = document.querySelectorAll(".nav a")
var indicator = document.querySelector(".nav .indicator")

function activate() {
    navItem.forEach((item) => item.classList.remove("active"));
    this.classList.add("active")

    if (this.classList.contains("first")) {
        indicator.classList.remove("one")
        indicator.classList.remove("two")
        indicator.classList.remove("three")
        indicator.classList.remove("four")
        indicator.classList.remove("five")
    } else if (this.classList.contains('second')) {
        indicator.classList.add("one")
        indicator.classList.remove("two")
        indicator.classList.remove("three")
        indicator.classList.remove("four")
        indicator.classList.remove("five")
    } else if (this.classList.contains('third')) {
        indicator.classList.add("two")
        indicator.classList.remove("three")
        indicator.classList.remove("four")
        indicator.classList.remove("five")
    } else if (this.classList.contains('fourth')) {
        indicator.classList.add("three")
        indicator.classList.remove("four")
        indicator.classList.remove("five")
    } else if (this.classList.contains('fifth')) {
        indicator.classList.add("four")
        indicator.classList.remove("five")
    } else if (this.classList.contains('sixth')) {
        indicator.classList.add("five")
        showSecondNav()
    }
}

function showSecondNav() {

    document.querySelector(".navSecond").style.zIndex = "999"

    for (var i = 0; i < document.querySelectorAll(".item").length; i++) {

        document.querySelectorAll(".item")[i].classList.add("flip-back")

    }
}

navItem.forEach((item) => item.addEventListener("click", activate))

