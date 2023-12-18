import { domTasks, displayTasks,makeTaskContainer} from "./todoDom";
import { objTasks } from "./createToDo";
import { openForm } from "./index";

let pushIndex;let isThisAEditedTasks = false;

 

function findClickedTask(clickedTaskIcon/*domTasks arry*/){
    //note on how it works : just compare   THE DATASETNAME OF TASK CONTAINER
    // AND (PEN OR DUSTBING ) ICON 
    // value can be changeEditTaskFlagd in code maketaskcontainer
    let requiredTask,requiredTaskIndex;
    domTasks.forEach((task,i) => {  
      if(task.dataset.todoname==clickedTaskIcon.dataset.name) {
         requiredTask = task;
         requiredTaskIndex=i;
      } 
    });
    return {task:requiredTask,index:requiredTaskIndex}
}



  
function deleteTaskByIndex(index){
    pushIndex = index;
    domTasks.splice(index,1) ; 
     
    displayTasks();
}
 

function changeEditTaskFlag(  value) {
  isThisAEditedTasks = value;
  console.log(isThisAEditedTasks,'changeEditTaskFlagfun')
}
function editTask(clickedPen){ 
    isThisAEditedTasks = true;
    const {task,index} =  findClickedTask(clickedPen);
    let objTask = objTasks[index]; 
    changeEditTaskFlag( true)
    let {taskName,taskDue,taskDescription,taskPriority} = objTask.getFormInput(objTask) 
    document.getElementById('taskName').value   = objTask.title;
    document.getElementById('taskDes').value    = taskDescription 
    document.getElementById('due').value  = taskDue
    document.getElementById('priority').value  = taskPriority ; 
    openForm();
    deleteTaskByIndex(index);
    
  }



  function deleteTask(clickedTaskIcon){ 
    const {task,index} =  findClickedTask(clickedTaskIcon,domTasks);
    domTasks.splice(index,1)  ; 
    displayTasks(); 
 }
  
  export {findClickedTask,deleteTaskByIndex,editTask,deleteTask,pushIndex,
     isThisAEditedTasks, changeEditTaskFlag 
     
  }