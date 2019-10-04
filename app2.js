
var students = [
    {
        name: "Ifeoma",
        age: 25,
        gender: "female",
        department: "computer science",
        level: 300,
        grade: 90
    },
    {
        name: "Gift",
        age: 24,
        gender: "female",
        department: "computer science",
        level: 300,
        grade: 80
    },
    {
        name: "Mark",
        age: 18,
        gender: "male",
        department: "computer science",
        level: 300,
        grade: 50
    },
    {
        name: "Charlse",
        age: 25,
        gender: "male",
        department: "computer science",
        level: 300,
        grade: 100
    },
    {
        name: "tosin",
        age: 24,
        gender: "female",
        department: "computer science",
        level: 300,
        grade: 100
    }
];

 function tablehead(){
     var thead = document.createElement("thead");
     var trhead = document.createElement("tr");
     var th1 = document.createElement("th");
     var th2 = document.createElement("th");
     var th3 = document.createElement("th");
     var th4 = document.createElement("th");
     var th5 = document.createElement("th");
     var th6 = document.createElement("th");
     th1.innerHTML = "Name";
     th2.innerHTML = "Level";
     th3.innerHTML = "Grade";
     th4.innerHTML = "Age";
     th5.innerHTML = "Gender";
     th6.innerHTML = "Department";

    trhead.append(th1, th2, th3, th4, th5, th6);
    thead.append(trhead);
    table.appendChild(thead);
}

var table=document.getElementById("table");

// table.remove();

var  createtable=()=>{
    tablehead();
    students.forEach(student=>{
        var tr = document.createElement("tr");
        var td1=document.createElement("td");
        td1.style.textAlign="center";
        td1.style.backgroundColor="pink";
        td1.style.fontStyle="italic";
        td1.innerHTML=student.name;   
        var td2=document.createElement("td");
        td2.style.textAlign="center";
        td2.style.backgroundColor="pink";
        td2.innerHTML=student.level;
        var td3=document.createElement("td");
        td3.style.textAlign="center";
        td3.style.backgroundColor="pink";
        td3.innerHTML=student.grade;
        var td4=document.createElement("td");
        td4.style.textAlign="center";
        td4.style.backgroundColor="pink";
        td4.innerHTML=student.age;
        var td5=document.createElement("td");
        td5.style.textAlign="center";
        td5.style.backgroundColor="pink";
        td5.innerHTML=student.gender;
        var td6=document.createElement("td");
        td6.style.textAlign="center";
        td6.style.backgroundColor="pink";
        td6.innerHTML=student.department;
        tr.append(td1,td2,td3,td4,td5,td6);
        table.appendChild(tr);
    });
}

createtable();



var Name=document.getElementById("name");
var level=document.getElementById("level");
var grade=document.getElementById("grade");
var age=document.getElementById("age");
var gender=document.getElementById("gender");
var department =document.getElementById("department");


document.getElementById("btn").addEventListener("click",()=>{
    // console.log(Name.value,level.value,age.value,grade.value,gender.value)
      table.innerHTML="";

    var student={
        name: Name.value,
        level: level.value,
        grade: grade.value,
        age: age.value,
        gender: gender.value,
        department: department.value
    };
    // console.log(students)

    students.push(student);

    createtable();

    // console.log(students)

});

// var btn=document.getElementById("btn");

// var clickHandle=(event)=>{
//     console.log("working...");
//     name.value
// };
// btn.addEventListener("click",clickHandle

// );