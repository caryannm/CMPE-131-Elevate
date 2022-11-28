'use strict';

const calculateGpa = document.getElementById('calculateBtn')
const GPA = document.getElementById('GPADisplay')
const addRow = document.getElementById('addRow')
const calcForm = document.getElementById('calculatorForm')
const calcEntryLine = calcForm.children[0].cloneNode(true)
const addCourseRow = document.getElementById('addCourseRow')
const courseForm = document.getElementById('course')
const courseEntryLine = courseForm.cloneNode(true);

const add = (a, b) => a + b
const sum = arr => arr.reduce(add, 0)

calculateGpa.addEventListener('click', function(){
    const rows = Array.from(document.getElementsByClassName('calculatorRow'))
    
    const gradeInfo = rows.map(el => ({
        weight: parseFloat(el.querySelector('.weight').value) || 0,
        grade: parseFloat(el.querySelector('.grade').value) || 0,
    }))
   
    if (sum(gradeInfo.map(info => info.weight)) !== 100) {
        alert('Weights must equal 100.')
        return
    }

    GPA.innerText = gradeInfo.reduce((accumulation, { grade, weight }) => {
        return accumulation + grade * weight;
    }, 0)/100;

});

addRow.addEventListener('click', function(){
   calcForm.append(calcEntryLine.cloneNode(true));
});

addCourseRow.addEventListener('click', function(){
    courseForm.append(courseEntryLine.cloneNode(true));
 });

