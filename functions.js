//Labratory 2 - Daniel Gallagher - G00360986
var myTasks = [];
//First Function
function addTasks(task) {
    return myTasks.push(task);
} //End of First function
//Second Function
function listAllTasks() {
    console.log("Beginning of the array");
    myTasks.forEach(function (task) {
        console.log(task);
    });
    console.log("End of the array");
} //End of Second Function
//Third Function
function deleteTasks(task) {
    var index = myTasks.indexOf(task);
    if (index > -1) {
        myTasks.splice(index, 1);
    } //end of if 
    else {
        console.log("Item: " + task + " not found!");
    } //end of else
    return myTasks.length;
} //End of Third Function
addTasks("element 1");
addTasks("element 2");
addTasks("element 3");
listAllTasks();
deleteTasks("element 2");
listAllTasks();
