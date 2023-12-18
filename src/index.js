import { greet ,createToDo} from "./createToDo";
import { addEvents } from "./addEvents"; 
  /* body.onload loads after loading EVERY SINGLE THING IN 
  THE DOCUMENT HENCE ADDING EVENTS ON THIS ACTION IS GREAT */

  // inshort adding click to existing tasks
document.body.onload=()=> { addEvents()}

const container  =      document.querySelector('.contentHolder');//right side container to store tasks
let taskContainer =     document.createElement('div');container.appendChild(taskContainer)
const taskBtn     =     document.querySelector('.taskbtn');
const taskDetailsDialog= document.getElementById('toDoTaskDetail');//dialog box
const submitBtn = document.querySelector('.submitBtn');
const exitBtn = document.querySelector('.exitBtn'); 
exitBtn.addEventListener('click',()=>taskDetailsDialog.close() );
taskBtn.addEventListener('click',()=>{ 
     openForm()
});
submitBtn.addEventListener('click',onFormSubmit)


function onFormSubmit(event){
    event.preventDefault(); //prevent form subbmission
    let  taskName = document.getElementById('taskName');
    let newObj =  new createToDo();  
    document.getElementById("inputForm").reset();
    taskDetailsDialog.close(); 
    addEvents();//to newly created tasks too
   }
   taskDetailsDialog.show();
function creatTask(event){

    }
  let c =new createToDo('son','descri','24-8-3834','HIGH'); 
  let d = new createToDo('rag ',"desc2",'','MEDIUM');
  let e = new createToDo('var',"333",'','MEDIUM')
  console.log(c)


  // opening and closin gforms 
function closeForm(){ 
    taskDetailsDialog.close();  
    }
function openForm(){
    taskDetailsDialog.show()
}

export {
    container,taskBtn,taskContainer,closeForm,openForm
}