var elForm = document.querySelector(".find-form");
var elInput = elForm.querySelector(".find-input");
var elRefreshBtn = elForm.querySelector(".refresh-btn");
var elBtn = elForm.querySelector(".find-btn");
var elCount = document.querySelector(".count");
var elResult = document.querySelector(".number-result");


elRefreshBtn.addEventListener("click", function(){
    window.location.reload(true);
})

var randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);

var maxCountNumber = 6;

elCount.textContent = `Urinishlar soni ${maxCountNumber}`;

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    var elInputValue = Number(elInput.value.trim());

    maxCountNumber--;

    elCount.textContent = `Urinishlar soni ${maxCountNumber}`;

    if(elInputValue > randomNumber){
        elResult.textContent = `${elInputValue} random sondan katta!!!`;
        elResult.classList.add("alert-danger")
    } else if(elInputValue < randomNumber){
        elResult.textContent = `${elInputValue} random sondan kichik!!!`;
        elResult.classList.remove("alert-danger");
        elResult.classList.add("alert-warning");
    } else{
        elResult.textContent = `Siz yutdingiz bu ${elInputValue} edi👏`;
        elInput.disabled = true;
        elBtn.setAttribute("disabled", true);
        elCount.textContent = "";
        elCount.classList.remove("alert");
        elResult.classList.remove("alert-danger");
        elResult.classList.remove("alert-warning");
        elResult.classList.add("winner");
        elRefreshBtn.classList.add("refresh-block");
    }

    if(maxCountNumber == 0){
        elInput.disabled = true;
        elBtn.setAttribute("disabled", true);
        elCount.textContent = "Urinishlar soni tugadi";
        elResult.textContent = "";
        elResult.classList.remove("alert")
        elCount.classList.add("alert-danger");
        elRefreshBtn.classList.add("refresh-block");
    }

    elInput.value = "";

})
