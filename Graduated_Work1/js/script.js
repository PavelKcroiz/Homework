/*document.getElement("spf");
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelector(".fdg");
document.querySelectorAll(""); */

document.getElementById("burger").onclick = function() {
    addMenu();
}

document.getElementById("btn").onclick = function() {
    addMenu();
}

function addMenu() {
    document.getElementById("menu").classList.toggle("show");
}



document.getElementById("plus1").onclick = function() {
    addText1();
}

function addText1() {
    document.getElementById("display1").classList.toggle("addText");
}


document.getElementById("plus2").onclick = function() {
    addText2();
}

function addText2() {
    document.getElementById("display2").classList.toggle("addText");
}



document.getElementById("bg1").onclick = function() {
    bg_line();
}

function bg_line() {
    document.getElementById("cont1").classList.toggle("bg_line");
    document.getElementById("cont1").classList.remove("bg_color", "bg_black", "bg_circles")
}


document.getElementById("bg2").onclick = function() {
    bg_color();
}

function bg_color() {
    document.getElementById("cont1").classList.toggle("bg_color");
    document.getElementById("cont1").classList.remove("bg_line", "bg_black", "bg_circles")
}


document.getElementById("bg3").onclick = function() {
    bg_black();
}

function bg_black() {
    document.getElementById("cont1").classList.toggle("bg_black");
    document.getElementById("cont1").classList.remove("bg_color", "bg_line", "bg_circles")
}


document.getElementById("bg4").onclick = function() {
    bg_circles();
}

function bg_circles() {
    document.getElementById("cont1").classList.toggle("bg_circles");
    document.getElementById("cont1").classList.remove("bg_color", "bg_black", "bg_line")
}