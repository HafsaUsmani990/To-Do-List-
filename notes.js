let addbtn = document.querySelector(".addibtn");
let input = document.querySelector(".inputie");
let taskContainer = document.querySelector(".tasks");

addbtn.addEventListener("click", ()=>{
    if(input.value.trim() == ""){
        alert("Please write smth first!");
        return;
    }

let task = document.createElement("div");
task.classList.add("task");

let taskname = document.createElement("div");
taskname.classList.add("taskname");

let deletebtn = document.createElement("button");
deletebtn.classList.add("deletebtn");
deletebtn.innerHTML = "🗑️";

deletebtn.addEventListener("click", ()=>{
    task.remove();
})

taskname.addEventListener("click",()=>{
    taskname.classList.toggle("done");
})
task.appendChild(taskname);
task.appendChild(deletebtn);
taskContainer.appendChild(task);

taskname.innerHTML = input.value;

input.value = "";
});
