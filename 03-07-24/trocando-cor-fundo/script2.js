document.getElementById("btnMudarCor").addEventListener("click", function() {
    let color = document.body.style.backgroundColor
    if (color === "#63B8FF") {
        document.body.style.background = "#63B8FF";
    } else {
        document.body.style.background = "#FFFACD";
    }
});


