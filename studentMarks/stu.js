const myForm=document.getElementById("myform")

const output=document.querySelector(".output")
let students=[]
myForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const student={
        name:e.target.name.value,
        address:e.target.address.value,
        class:e.target.class.value,
        marks:{
           english: Number(e.target.english.value),
        science: Number(e.target.science.value),
        maths: Number(e.target.maths.value),
        computer: Number(e.target.computer.value)
        }
    }

    calculateStudent(student)

    students.push(student)
    
    displayStudent()

    myForm.reset()
})

function displayStudent(){

    let tableHtml=`  <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Class</th>
                            <th>English</th>
                            <th>Science</th>
                            <th>Maths</th>
                            <th>Computer</th>
                            <th>Total</th>
                            <th>Percentage</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>`
            
    students.forEach((stu,index)=>
    {
        const rowclass=stu.grade=="F"?"fail-row": "";
        tableHtml+=`<tr class="${rowclass}">
                        <td>${index + 1}</td>
                        <td>${stu.name}</td>
                        <td>${stu.address}</td>
                        <td>${stu.class}</td>
                        <td>${stu.marks.english}</td>
                        <td>${stu.marks.science}</td>
                        <td>${stu.marks.maths}</td>
                        <td>${stu.marks.computer}</td>
                        <td>${stu.total}</td>
                        <td>${stu.percentage.toFixed(2)} %</td>
                        <td>${stu.grade}</td>
                        
                    </tr>`
    })

      tableHtml += `
                    </tbody>
                </table>
            `;

        output.innerHTML=tableHtml

}

function calculateStudent(student){
    let total=Object.values(student.marks)
    .reduce((sum, mark) => sum + mark, 0);

    student.total=total;

    let percentage=(total/((Object.keys(student.marks).length)*100))*100

    student.percentage=percentage;

      let grade;
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B+";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 50) grade = "C";
    else grade = "F";

    student.grade = grade;
}