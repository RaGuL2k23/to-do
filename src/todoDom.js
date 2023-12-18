import { container  } from "./index"; 
import {  pushIndex  } from "./form controls";


let domTasks =[]; let taskContainer =document.createElement('div')

//determines where to push the edited task(very time saving)
function makeTaskContainer(obj,pushIndex){
        const {taskName,taskDescription,taskDue,taskPriority} = obj.getFormInput();

        const task = document.createElement('div');task.classList.add('task');
        task.innerHTML= ` <div  class="toDoTask ${taskPriority} s"><input type="checkbox" name="completeTask" id="completeTask">
        <div>${taskName}</div><div>${taskDue}</div> <div>${taskDescription}</div>
        <div class="img"><img data-name="${taskName}${taskPriority}${taskDescription}" class=edit src="./dist/images/pen.f143f2542420df9040ba2f60576c01b4.svg" alt="pen">
        <img tooltip=delete  class=delete data-name="${taskName}${taskPriority}${taskDescription}" src="./dist/images/icons8-trash-1-dark.912351d015e21b5e38469d33950ebd1b.svg" alt="bin"> </div>              </div>
        </div>` 
        task.setAttribute('data-todoname',`${taskName}${taskPriority}${taskDescription}`);   
        pushTask(domTasks,task,pushIndex)
        displayTasks(); 
}
function pushTask(arrayName,task,index= arrayName.length ){
    
    arrayName.splice(index,0,task); 
}
  
function displayTasks(){ 
 
     taskContainer.remove();//container to store tasks 
     taskContainer =document.createElement('div');
     container.append(taskContainer); 

     domTasks.forEach((task)=>{ 
          taskContainer.append(task); 
        }); 
        
}
 
 
 
export{displayTasks,makeTaskContainer, pushIndex,domTasks }