
const tasks=[];


const addBtn=document.querySelector(".addbtn")
const taskInput=document.querySelector(".add input")
const mainlist=document.querySelector(".list")


let i=1;

addBtn.addEventListener("click",(e)=>{

    if (!taskInput.value.trim()) return; 
    let task={
        id:i,
        desc:taskInput.value,
        completed:false
    }

    tasks.push(task)

    renderFilteredTasks()

i++;

taskInput.value=""

})

function renderTask(task){

  
        let list=document.createElement("li")
        let para=document.createElement("p")

        list.id=task.id;
        para.textContent=task.desc;

        const btns=document.createElement("div")
        btns.setAttribute("class","Sidebuttons")

    const compbtn=document.createElement("button");
    compbtn.classList.add("comp-btn");
    compbtn.style.padding = "5px";
    compbtn.textContent="Mark completed";
      if(task.completed) compbtn.classList.add("compclicked")


       const rmbtn = document.createElement("button");
    rmbtn.classList.add("remove-btn");
    rmbtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 016 5h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5zM3.5 6a.5.5 0 01.5-.5h8a.5.5 0 010 1h-8a.5.5 0 01-.5-.5zM4.118 7.5a.5.5 0 01.364-.118h7.036a.5.5 0 01.364.118l.635 7.07A.5.5 0 0112.5 15h-9a.5.5 0 01-.497-.43l.635-7.07z"/>
      </svg>
    `;

    btns.appendChild(compbtn)
    btns.appendChild(rmbtn)

list.appendChild(para);
list.appendChild(btns);

    compbtn.addEventListener("click",()=>{
      
        setCompleted(task.id)})

    rmbtn.addEventListener("click",()=>removeTask(task.id));
    

    mainlist.appendChild(list);

    }


function renderFilteredTasks(){
    mainlist.innerHTML=""
    const filter=document.querySelector("input[name=filter]:checked").value

    let filteredTasks=tasks;

    if(filter=="Completed"){
        filteredTasks=tasks.filter((task)=>task.completed==true)
    }else if(filter=="Pending") {
        filteredTasks=tasks.filter((task)=>task.completed==false)

    }

    filteredTasks.forEach((task)=>renderTask(task))


}

    function removeTask(id){

        const index=tasks.findIndex(t=>t.id==id);
        if(index!=-1) tasks.splice(index,1);

        const listItem=document.getElementById(id)
        if(listItem) listItem.remove();

    }

    
function setCompleted(id){
    const index=tasks.findIndex(t=>t.id==id);
        if(index!=-1) tasks[index].completed=!tasks[index].completed;

        renderFilteredTasks();

    
 
}

document.querySelectorAll('input[name="filter"]').forEach(radio => {
    radio.addEventListener("change", renderFilteredTasks);
});
