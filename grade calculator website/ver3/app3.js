'use strict';

var table = document.getElementById('tbl');
var courseCount = 0;

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

/*
function resetTable(current) {
    var tableID = current.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.id;
    var currentTable = document.getElementById(tableID);
    currentTable.innerHTML;
}*/

function Calc(current) {
    var tableID = current.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.id;
    var currentTable = document.getElementById(tableID);

    var outputDiv = current.parentNode.parentNode.nextElementSibling;

    var numerator = 0;
    var weightSum = 0;
    var dataCount = 0;

    let children = outputDiv.childNodes;
    let gchildren1 = children[0].childNodes;
    let gchildren2 = children[1].childNodes;

    var resultOut = gchildren1[0];
    var letterGradeOut = gchildren2[0];
    
    var result = 0;
    var letterGrade;

    const gradeArray = currentTable.getElementsByClassName('grades');
    const weightArray = currentTable.getElementsByClassName('weights');
    
    for (let i = 0; i < gradeArray.length; i++) {
        if (isNaN(gradeArray[i].value) || isNaN(weightArray[i].value)) {
            alert("Error: Please enter a number for the grade and weight.");
            break;
        }
        else if (gradeArray[i].value != "" && weightArray[i].value != "") {
            numerator += gradeArray[i].value * weightArray[i].value;
            weightSum += +weightArray[i].value;
            dataCount++;
        }
    }
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

    if (dataCount == 0) {
        alert("Error: Please enter your grade and weight.");
    }

    resultOut.innerHTML = result.toFixed(2) + "%";
    letterGradeOut.innerHTML = letterGrade;
}

function addCourse() {
    courseCount++;
    var cloneTemp = document.getElementById("course").cloneNode(true);
    cloneTemp.id += ("Clone"+courseCount);
    cloneTemp.getElementsByTagName('table')[0].id = "tbl" + courseCount;
    document.getElementById("placeholder").appendChild(cloneTemp);
}

function deleteCourse(currentCourse) {
    if (currentCourse.parentNode) {
        currentCourse.parentNode.removeChild();
    }
}

