// Get elements from DOM
let divRating = document.getElementById("rating")
let divThankU = document.getElementById("thank-you")
let submit = document.getElementById("submit")
let buttons = document.querySelectorAll(".input")
let score = document.getElementById("score")

// Get button pressed
function check(){
    event.preventDefault();
    let c = 0;
    for (button of buttons){
        if (button.checked){
            c += 1;
            return c;
        }
        else{
            c++;
        }
    }
    alert("No button was pressed. Please press one.")
}

// Change to thank you view
function changeToTy (){
    divRating.style.display = "none";
    divThankU.style.display = "flex";
}

// Adding event listener
submit.addEventListener("click" , () => {
    let c = check();
    if(c.length != 0){
        score.textContent = "You selected " + c + " out of 5";
        changeToTy();
    }
})