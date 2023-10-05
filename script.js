const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".header_item");

hamburger.addEventListener("click", ()=> {
    navigation.classList.toggle("active")
    hamburger.classList.toggle("active")
})