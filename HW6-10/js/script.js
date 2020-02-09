/*document.getElement("spf");
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelector(".fdg");
document.querySelectorAll(""); */

document.getElementById("burger").onclick = function() {
    addMenu();
}

function addMenu() {
    document.getElementById("menu").classList.toggle("show");
}