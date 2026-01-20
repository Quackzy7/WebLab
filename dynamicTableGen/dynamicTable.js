
const genbtn=document.getElementById("genBtn")

genbtn.addEventListener("click",()=>genTable())

function genTable(){
    const outputScreen=document.getElementsByClassName("output")[0]
    outputScreen.innerHTML=""
       const noRow = Number(document.getElementById("rowInput").value);
    const noCol = Number(document.getElementById("colInput").value);

    if(noRow<=0 ||noCol<=0){
        outputScreen.textContent="Enter valid no of rows and columns"
    }
    
    

    const table=document.createElement("table")

    for (let i=0;i<noRow;i++){

        let tr=document.createElement("tr")

       

        for(let j=0;j<noCol;j++){

            const cell = (i === 0)
                ? document.createElement("th")
                : document.createElement("td");

            cell.textContent = `Cell `;
            tr.appendChild(cell);

        }

        

        table.appendChild(tr);


    }

    outputScreen.append(table);




}

function addRow(){
    console.log("addrow clicked")
 const outputScreen=document.getElementsByClassName("output")[0]
  const table=document.querySelector(".output table")

    if(!table){
         outputScreen.textContent="Generate a table first"
         return;
    }

    const tr=document.createElement("tr")

    const existTr=document.querySelector("tr")
    const col=existTr.children.length

    for (let i=0 ;i <col;i++){
        let td=document.createElement("td")
        td.textContent="Cell"
        tr.appendChild(td)
    }

    table.appendChild(tr)

    outputScreen.appendChild(table)



}

function deleteRow(){
   console.log("deleterow clicked")
 const outputScreen=document.getElementsByClassName("output")[0]
  table=document.querySelector(".output table")
  if(!table){
    outputScreen.textContent="Generate a table first"
    return;
  }

  const lastRow = table.querySelector("tr:last-child");
    lastRow.remove()
}

function highlightEvenRows(){
    const table=document.querySelector(".output table")
    table.classList.toggle("highlight-even")
}