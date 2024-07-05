const buttton = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");



//exemplo de includes 
const classListArray = ["teste", "oi"];
console.log(classListArray.includes("teste"));


buttton.addEventListener("click", function(){
    popup.classList.add("d-block");
    
});

popup.addEventListener("click", function(event) {
    const classListClick = event.target.classList[0];
    const classNameArray = ["popup-close", "popup-link", "popup-wrapper"];

     const isClassList = classListArray.includes(classListClick)
    
    if (classNameArray.includes(classListClick)) {
        popup.classList.remove("d-block");

    }
    











    
})

