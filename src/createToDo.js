function greet(){
    console.log('arahh arahh')
}
import { resetForm } from "./index";
import { displayTasks,makeTaskContainer } from "./todoDom";
export{greet,createToDo,objTasks}
const taskDetailsDialog = document.getElementById("inputForm");

let objTasks=[];
class createToDo{
    constructor(title,des,date,priority){
        if(title==undefined /*& date == undefined & des== undefined*/){
            console.log('yds')
            this.title = document.getElementById('taskName').value,
            this.des   = document.getElementById('taskDes').value,
            this.date  = document.getElementById('due').value,
            this.priority=document.getElementById('priority').value 
           }
        else{
            console.log('no')
            this.title = title,this.des=des,
            this.date=date,this.priority=priority
        }    
        // this.getFormInput();
        objTasks.push(this)
        console.log(this,'inside class')
        console.log(objTasks)
        makeTaskContainer(this)// make task container for created obj
    }
    
    
    getFormInput(){ //to store items name,date,due,priority
       let taskName =  this.title
       let taskDescription = this.des
       let taskDue =  this.date
       let taskPriority =  this.priority
        resetForm();console.log('formInput')
        return {taskName,taskDue,taskDescription,taskPriority}
        }

    onFormSubmit(event){
        event.preventDefault(); //prevent form subbmission
        // addToDo(); 
        
        document.getElementById("inputForm").reset();
         taskDetailsDialog.close();
        
        }
    
        

}

