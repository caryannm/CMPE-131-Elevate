'use strict';

function insert_row() {
    var newRow = document.getElementById('tbl').insertRow();
    newRow.innerHTML = "<tr><td><input></td> <td><input class='grade[]'></td> <td><input class='weight[]'></td> <td><input type='button' onclick='delete_row(this)' value='Delete row'></td> </tr>";
}

function delete_row(currentRow) {
    try {
        var table = document.getElementById('tbl');
        var rowCount = table.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];

            if (row == currentRow.parentNode.parentNode) {
            if (rowCount <= 2) {
                alert("Error: cannot delete all rows.");
                break;
            }
            table.deleteRow(i);
            rowCount--;
            i--;
            }
        }
    }
    catch(e) {alert(e);}
}

function Calc() {
    var numerator = 0;
    var weightSum = 0;
    var letterGrade;

    const gradeArray = document.getElementsByClassName('grade[]');
    const weightArray = document.getElementsByClassName('weight[]');

    for (let i = 0; i < gradeArray.length; i++) {
        numerator += gradeArray[i].value * weightArray[i].value;
        weightSum += +weightArray[i].value;
    }
    var result = numerator / weightSum;

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

    var output1 = document.getElementById("result");
    output1.innerHTML = result.toFixed(2) + "%";

    var output2 = document.getElementById("letterGrade");
    output2.innerHTML = letterGrade;
}