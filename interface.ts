//Lab 2 - Daniel Gallagher - G00360986
export interface toDoInterface
{
    myTasks:Array<string>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}