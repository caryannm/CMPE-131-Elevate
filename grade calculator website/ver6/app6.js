'use strict';

var table = document.getElementById('tbl');
var courseCount = 0;
var result = 0;
var letterGrade;
const cloneID = document.getElementById("course"+courseCount);
const cloneIDElement = cloneID.cloneNode(true);

function insert_row(current) {
    var tableID = current.previousElementSibling.id;
    var currentTable = document.getElementById(tableID);
    var newRow = currentTable.insertRow();
    newRow.innerHTML = "<tr><td><input></td> <td><input class='grades'></td> <td><input class='weights'></td> <td><input type='button' onclick='delete_row(this)' value='Delete row'></td> </tr>";
}

function delete_row(currentRow) {
    try {
        var tableID = currentRow.parentNode.parentNode.parentNode.parentNode.id;
        var currentTable = document.getElementById(tableID);
        var rowCount = currentTable.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var row = currentTable.rows[i];
            if (row == currentRow.parentNode.parentNode) {
                if (rowCount <= 2) {
                    alert("Error: Cannot delete all rows.");
                    break;
                }
                currentTable.deleteRow(i);
                rowCount--;
                i--;
            }
        }
    }
    catch(e) {alert(e);}
}

function calc(current) {
    var tableID = current.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.id;
    var currentTable = document.getElementById(tableID);

    const gradeArrayLike = currentTable.getElementsByClassName('grades');
    //const gradeArray = Array.prototype.slice.call(gradeArrayLike);
    const weightArrayLike = currentTable.getElementsByClassName('weights');
    //const weightArray = Array.prototype.slice.call(weightArrayLike);
    
    const gradeArray = [];

    for (let i = 0; i < gradeArrayLike.length; i++) {
        gradeArray[i] = gradeArrayLike[i].value;
    }

    const weightArray = [];

    for (let i = 0; i < weightArrayLike.length; i++) {
        weightArray[i] = weightArrayLike[i].value;
    }
    
    calcHelper(gradeArray, weightArray);

    var resultOut = current.nextElementSibling.nextElementSibling.nextElementSibling;
    resultOut.innerHTML = result.toFixed(2) + "% &emsp;";
    var letterGradeOut = current.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    letterGradeOut.innerHTML = letterGrade;
}

function calcHelper(gradeArray, weightArray) {
    var numerator = 0;
    var weightSum = 0;
    var dataCount = 0;
    var isValid = 0;

    for (let i = 0; i < gradeArray.length; i++) {
        if ((isNaN(gradeArray[i]) || isNaN(weightArray[i])) || (gradeArray[i] < 0 || weightArray[i] < 0)) {
            alert("Error: Please enter positive values for grade and weight.");
            isValid = -1;
            dataCount++;
            break;
        }
        else if (gradeArray[i] != "" && weightArray[i] != "") {
            numerator += gradeArray[i] * weightArray[i];
            weightSum += +weightArray[i];
            dataCount++;
        }
    }

    if (weightSum > 100) {
        alert("Error: Total weight should not exceed 100.");
        isValid = -1;
    }
    else {
        result = numerator / weightSum;
        
        if (result >= 100) letterGrade = "A+";
        else if (94 <= result && result < 100) letterGrade = "A"; 
        else if (90 <= result && result < 94) letterGrade = "A-"; 
        else if (87 <= result && result < 90) letterGrade = "B+"; 
        else if (83 <= result && result < 87) letterGrade = "B"; 
        else if (80 <= result && result < 83) letterGrade = "B-"; 
        else if (77 <= result && result < 80) letterGrade = "C+"; 
        else if (73 <= result && result < 77) letterGrade = "C"; 
        else if (70 <= result && result < 73) letterGrade = "C-"; 
        else if (67 <= result && result < 70) letterGrade = "D+"; 
        else if (63 <= result && result < 67) letterGrade = "D"; 
        else if (60 <= result && result < 63) letterGrade = "D-"; 
        else letterGrade = "F";
    }

    if (dataCount == 0) {
        alert("Error: Please enter values for grade and weight.");
        isValid = -1;
    }

    if(isValid == -1) {
        return isValid;
    }

    return result;
}

function addCourse() {
    var clone = cloneIDElement.cloneNode(true);
    courseCount++;
    clone.id = ("course"+courseCount);
    clone.getElementsByTagName('table')[0].id = "tbl" + courseCount; 
    document.getElementById("placeholder").appendChild(clone);
}

function deleteCourse(current) {
    try {
        var currentCourse = current.parentNode.parentNode.parentNode;
        var courseCloneID;

        if (courseCount == 0) 
            alert("Error: Cannot delete all courses.");
        
        else{
            for (var i = 0; i < courseCount+1; i++) {
                courseCloneID = "course" + i;
                if (courseCloneID == currentCourse.id) {
                    currentCourse.parentNode.removeChild(currentCourse);
                    courseCount--;   
                }
            }
        }
    }
    catch(e) {alert(e);}
}

