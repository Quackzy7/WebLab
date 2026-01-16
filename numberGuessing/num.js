
const btn = document.querySelectorAll(".app button")[0];
const playDiv = document.querySelector(".playagain")
let score = 5;

let trueVal = (Math.floor(Math.random() * 100)) + 1;
console.log("The correct number is ", trueVal);

btn.addEventListener("click", () => {
    let guess = document.getElementById("guessnum").value;
    const hint = document.getElementsByClassName("hint")[0];
    
    console.log("You guessed the number " + guess + "! Current score=" + score);

    if (!guess) {
        hint.textContent = "Please enter a valid number";
        return;
    }
    guess=Number(guess)
    if (guess < trueVal) {

        score = score - 1;
    
        hint.textContent = "You guessed too low !"
        hint.style.color="rgb(58, 62, 118)";
    } else if (guess > trueVal) {

        score = score - 1;
     
        hint.textContent = "You guessed too high !"
         hint.style.color="rgb(127, 44, 44)";
    }
    else {
        hint.textContent = "You guessed the correct number ! Score = " + score;
        hint.style.color="rgb(13, 57, 10)";
        btn.disabled = true;
        playAgain();
    }

    if (score == 0) {
        hint.textContent = "❌ Game Over! The number was " + trueVal;
        hint.style.color="rgb(52, 3, 3)";
        btn.disabled = true;
        playAgain();
       
    }

})


function playAgain(){
     const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play Again";

        playAgainBtn.addEventListener("click", function resetGame() {
            score = 5;
            trueVal = Math.floor(Math.random() * 100) + 1;
            btn.disabled = false;
            document.getElementById("guessnum").value = "";
            document.querySelector(".hint").textContent = "";
            playDiv.innerHTML = "";

            console.log("New number is", trueVal);
        });

        playDiv.appendChild(playAgainBtn);
        return;
}
