const text = document.querySelector(".box h1");

function ifmouseenter() {
    text.classList.toggle("textBorderRed");
}
function ifmouseleave() {
    text.classList.toggle("textBorderRed");
}

text.addEventListener("mouseenter", ifmouseenter);
text.addEventListener("mouseleave", ifmouseleave);

