const text = document.querySelector(".box div");

const changeWord = {
    ifClick: function () {
        text.innerText = "I 'm Clicked !";        
    },
    ifMouseenter: function () {
        text.innerText = "Mouse Hoverd !";        
    },
    ifMouseleave: function () {
        text.innerText = "Mouse Leave ~";        
    },
    ifResize: function () {
        text.innerText = "Window resized !";        
    },
    ifCopy: function () {
        text.innerText = "Am I copied ?";        
    }
    
};

text.addEventListener("click", changeWord.ifClick);
text.addEventListener("mouseenter", changeWord.ifMouseenter);
text.addEventListener("mouseleave", changeWord.ifMouseleave);
text.addEventListener("copy", changeWord.ifCopy);

window.addEventListener("resize", changeWord.ifResize);

console.dir(text);
