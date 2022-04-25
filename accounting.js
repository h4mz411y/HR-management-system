"use strict";


let tableEl = document.getElementById("tableID");
Employee.prototype.render= function(){
    // creat a div inside card section 
    let thead = document.createElement("thead"); 
    tableEl.appendChild(thead);
    thead.textContent = this.department;
    thead.classList.add("tableHead");


    let tr = document.createElement("tr");
    tr.textContent = this.department; 
    tableEl.appendChild(tr);
    tr.classList.add("tableRow");

    let tbody = document.createElement("tbody"); 
    tableEl.appendChild(tbody);
    tbody.classList.add("tableBody");

    let tdy = document.createElement("tbody"); 
    tableEl.appendChild(tbody);
    tbody.classList.add("tableBody");



function renderEmp() {
    for (let i = 0; i < empArr.length; i++) {
        empArr[i].renderTable();
    }
    
}
renderEmp();