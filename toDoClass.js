"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.myTasks = [];
    }
    //First 
    toDoClass.prototype.addTask = function (task) {
        return this.myTasks.push(task);
    };
    //Second 
    toDoClass.prototype.listAllTasks = function () {
        console.log("Beginning of the array");
        this.myTasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End of the array");
    };
    //Third Function
    toDoClass.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task);
        if (index > -1) {
            this.myTasks.splice(index, 1);
        } //end of if 
        else {
            console.log("Item: " + task + " not found!");
        } //end of else
        return this.myTasks.length;
    };
    return toDoClass;
}()); //End of toDoClass
var testClass = new toDoClass();
testClass.addTask("Element 1");
testClass.addTask("Element 2");
testClass.addTask("Element 3");
testClass.listAllTasks();
testClass.deleteTask("Element 2");
testClass.listAllTasks();
