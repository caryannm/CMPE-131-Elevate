'use strict';

const calculateButton = document.querySelectorAll
 
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        
    }

    console.log('current class name: ' + className);
});

Calc();

function Calc() {
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

    var output1 = document.getElementById("result");
    output1.innerHTML = result.toFixed(2) + "%";

    var letterGrade;

    switch (result) {
        case (result == 100): letterGrade = "A+";
        case (94 <= result && result <= 99): letterGrade = "A"; break; 
        case (90 <= result && result <= 93): letterGrade = "A-"; break; 
        case (87 <= result && result <= 89): letterGrade = "B+"; break; 
        case (83 <= result && result <= 86): letterGrade = "B"; break; 
        case (80 <= result && result <= 82): letterGrade = "B-"; break; 
        case (77 <= result && result <= 79): letterGrade = "C+"; break; 
        case (73 <= result && result <= 76): letterGrade = "C"; break; 
        case (70 <= result && result <= 72): letterGrade = "C-"; break; 
        case (67 <= result && result <= 69): letterGrade = "D+"; break; 
        case (63 <= result && result <= 66): letterGrade = "D"; break; 
        case (60 <= result && result <= 62): letterGrade = "D-"; break; 
        case (0 <= result  && result <= 59): letterGrade = "F"; break; 
    }

    var output2 = document.getElementById("letterGrade");
    output2.innerHTML = letterGrade;
}