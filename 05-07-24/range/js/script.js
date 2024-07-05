const range = document.querySelector("#range");
let rangeValue = document.querySelector("#rangeValue");

range.addEventListener("input", function(){
    rangeValue.innerHTML = range.value;

});
