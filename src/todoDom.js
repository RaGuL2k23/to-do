import { container,taskBtn,taskContainer,openForm, resetForm } from "./index";
import { objTasks } from "./createToDo";
let domTasks =[]; 
function makeTaskContainer(obj){
    const {taskName,taskDescription,taskDue,taskPriority} = obj.getFormInput();

    const task = document.createElement('div');task.classList.add('task');
    task.innerHTML= ` <div  class="toDoTask ${taskPriority} s"><input type="checkbox" name="completeTask" id="completeTask">
    <div>${taskName}</div><div>${taskDue}</div> <div>${taskDescription}</div>
    <div class="img"><img data-name="${taskName}${taskPriority}" class=edit src="./images/pen.f143f2542420df9040ba2f60576c01b4.svg" alt="pen">
    <img tooltip=delete  class=delete data-name="${taskName}${taskPriority}" src="./images/icons8-trash-1-dark.912351d015e21b5e38469d33950ebd1b.svg" alt="bin"> </div>              </div>
    </div>` 
    task.setAttribute('data-todoname',`${taskName}${taskPriority}`);   
    domTasks.push(task)
    displayTasks(); 
}

function displayTasks(){ 
  
    taskContainer.remove();//container to store tasks 
    taskContainer =document.createElement('div');
    container.append(taskContainer); 
    domTasks.forEach((task)=>{ 
          taskContainer.append(task); 
        }); 
        
}
 //adding delete fn logics
function deleteTask(clickedTaskIcon){ 
    const {task,index} =  findClickedTask(clickedTaskIcon);
    domTasks.splice(index,1)  ;
    console.log(task,index)
    displayTasks(); 
 }
function deleteTaskByIndex(index){
    domTasks.splice(index,1) ;
    objTasks.splice(index,1)
    displayTasks();
}

function findClickedTask(clickedTaskIcon){
    //note on how it works : just compare   THE DATASETNAME OF TASK CONTAINER
    // AND (PEN OR DUSTBING ) ICON 
    // value can be changed in code maketaskcontainer
    let requiredTask,requiredTaskIndex;
    domTasks.forEach((task,i) => {  
      if(task.dataset.todoname==clickedTaskIcon.dataset.name) {
         requiredTask = task;
         requiredTaskIndex=i;
      } 
    });
    return {task:requiredTask,index:requiredTaskIndex}
  }
   
  function editTask(clickedPen){ 
    const {task,index} =  findClickedTask(clickedPen);
    let objTask = objTasks[index]; 
    let {taskName,taskDue,taskDescription,taskPriority} = objTask.getFormInput()
    console.log({taskName,taskDue,taskDescription,taskPriority})
    document.getElementById('taskName').value   = taskName
    document.getElementById('taskDes').value    = taskDescription 
    document.getElementById('due').value  = taskDue
    document.getElementById('priority').value  = taskPriority 
    openForm();
    deleteTaskByIndex(index);
  }

 function addEvents(){ 
   let deletIcons = document.querySelectorAll(".delete");//adding event listeners
    for (let deleteImg of deletIcons){
      deleteImg.onclick = function() {
        deleteTask(deleteImg);
      } }
    document.querySelectorAll('.edit').forEach( pen => pen.onclick =  ()=> {
        editTask(pen);
        });
     
    
    }
export{displayTasks,makeTaskContainer,addEvents}