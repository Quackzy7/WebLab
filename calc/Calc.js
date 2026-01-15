
const btns=document.querySelectorAll(".ipbtn")
const screen=document.getElementsByClassName("screen")[0]
screen.textContent=""

const history=[]

btns.forEach(button=>{
    button.addEventListener("click",()=>{  
    let lastchar=screen.textContent.charAt(screen.textContent.length-1)
    const value=button.textContent
    if(isOperator(value) && isOperator(lastchar)) return
    screen.textContent+=value})
})



function Calculate(){
    const result=eval(screen.textContent)
     if (result === Infinity || result === -Infinity) {
            alert("Error: Division by zero is not allowed!");
            screen.textContent = "";
            return;
        }
         if (result === undefined || isNaN(result)) {
            alert("Error: Invalid Calculation!");
            screen.textContent = "";
            return;
        }
    addToHistory(screen.textContent + " = " + result);
     screen.textContent=result
     
}
function ClearScreen(){
     screen.textContent=""

}
function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}

function addToHistory(str){
    history.unshift(str)

    

    const list=document.createElement("li")
    list.textContent=history[0]
    const olist=document.getElementsByTagName("ol")[0]
    olist.prepend(list)
    

    if(history.length>5){ history.pop()
        olist.lastElementChild.remove()
     }

}

function showHistory(){
    const btn = document.getElementsByClassName("historydropdown")[0]
    btn.style.display=="block" ?btn.style.display="none":btn.style.display="block"
}

function clearHistory(){
  history.length = 0;
  document.querySelector("ol").innerHTML = "";

}

document.addEventListener("keydown", (e) => {
    const allowedKeys = "0123456789+-*/";
    const key = e.key;

    if (allowedKeys.includes(key)) {

    const lastChar = screen.textContent.charAt(screen.textContent.length - 1);

 
    if (isOperator(key) && isOperator(lastChar)) return;

    screen.textContent += key;
    }
      if (key === "Enter") {
        Calculate();
    }

    if (key === "Backspace") {
        screen.textContent = screen.textContent.slice(0, -1);
    }
});