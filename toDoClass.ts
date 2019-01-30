import {toDoInterface} from './interface';

class toDoClass implements toDoInterface
{
    myTasks:Array<string> = [];

    //First 
    addTask(task:string):number
    {
        return this.myTasks.push(task);
    }

    //Second 
    listAllTasks():void
    {
        console.log("Beginning of the array");
        this.myTasks.forEach(function(task){
        console.log(task);
    })
    console.log("End of the array");
    }

    //Third Function
    deleteTask(task: string): number
    {
        let index:number= this.myTasks.indexOf(task);
    
         if(index > -1){
            this.myTasks.splice(index,1);

        }//end of if 
     else
        {
             console.log("Item: "+ task +" not found!");
        }//end of else
        return this.myTasks.length;
    }

}//End of toDoClass

let testClass = new toDoClass();
testClass.addTask("Element 1");
testClass.addTask("Element 2");
testClass.addTask("Element 3");
testClass.listAllTasks();
testClass.deleteTask("Element 2");
testClass.listAllTasks();