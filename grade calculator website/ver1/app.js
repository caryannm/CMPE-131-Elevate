'use strict';

const switcher = document.querySelector('.btn')
const calculateGpa = document.getElementById('calculate-btn')
const GPA = document.getElementById('GPA_display')
const addRow = document.getElementById('add_row')

calculateGpa.addEventListener('click', function(){
    var count = 0;

    var grd = document.getElementById('grade').value;
    var wght = document.getElementById('weight').value;
    count = grd * (wght);

    GPA.innerText = count;
});

addRow.addEventListener('click', function(){
   var data = (document.getElementById('calculator_form'));
   document.getElementById('add_new_row').innerHTML = data.innerHTML;
});

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});

