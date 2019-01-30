//Labratory 2 - Daniel Gallagher - G00360986
let myTasks:Array<string>=[];

 //First Function
function addTasks(task: string): number{
    return myTasks.push(task);
 }//End of First function

 //Second Function
 function listAllTasks():void{
     console.log("Beginning of the array");
     myTasks.forEach(function(task){
         console.log(task);
     })
     console.log("End of the array");
}//End of Second Function

//Third Function
function deleteTasks(task: string): number{
    let index:number= myTasks.indexOf(task);
    
    if(index > -1){
        myTasks.splice(index,1);

    }//end of if 
    else{
        console.log("Item: "+ task +" not found!");
    }//end of else
    return myTasks.length;
}//End of Third Function

addTasks("element 1");
addTasks("element 2");
addTasks("element 3");
listAllTasks();
deleteTasks("element 2");
listAllTasks();




    
    