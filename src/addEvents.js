import { editTask } from "./form controls";
import { deleteTask } from "./form controls";

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
     export{addEvents,}