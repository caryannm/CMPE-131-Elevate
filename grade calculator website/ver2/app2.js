'use strict';

const calculateButton = document.querySelectorAll
 
switcher.addEventListener('click', function() {
    Calc();
});

function Calc() {
    /*
    var tableRow = document.getElementById('tbl').rows;
    var grd1 = document.getElementById('grade1').value;
    var grd2 = document.getElementById('grade2').value;
    var grd3 = document.getElementById('grade3').value;
    var grd4 = document.getElementById('grade4').value;
    var grd5 = document.getElementById('grade5').value;
    var wght1 = document.getElementById('weight1').value;
    var wght2 = document.getElementById('weight2').value;
    var wght3 = document.getElementById('weight3').value;
    var wght4 = document.getElementById('weight4').value;
    var wght5 = document.getElementById('weight5').value;

    var weightSum = +wght1 + +wght2 + +wght3 + +wght4 + +wght5;
    var sum = (grd1 * wght1) + (grd2 * wght2) + (grd3 * wght3) + (grd4 * wght4) + (grd5 * wght5);
    var result = sum / weightSum;
    */

    var table = document.getElementById('tbl');
    


    var letterGrade;

    if (result == 100) letterGrade = "A+";
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