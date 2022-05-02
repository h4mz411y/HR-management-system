"use strict";
let employeesData = [];
let cardsSection = document.querySelector("#cards-section");
let mainForm = document.querySelector("#main-form");
const idArr = [];
let flag = 0;

const generateID = function () {
  let uniqueID = 1000 + Math.floor(Math.random() * 9000);
  if (!idArr) {
    for (let i = 0; i < idArr.length; i++) {
      if (uniqueID === idArr[i]) generateID();
      else {
        idArr.push(uniqueID);
        return uniqueID;
      }
    }
  } else {
    idArr.push(uniqueID);
    return uniqueID;
  }
};

function Employee(name, department, level, imageURL, salary) {
  this.employeeID = generateID();
  this.fullName = name;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = salary;
  employeesData.push(this);
}

Employee.prototype.employeeSalary = function () {
  let basicSalary;
  if (this.level.toLocaleLowerCase() === "senior") {
    basicSalary = Math.random() * (2000 - 1501) + 1500;
  } else if (this.level.toLocaleLowerCase() === "mid-senior") {
    basicSalary = Math.random() * (1500 - 1001) + 1000;
  } else if (this.level.toLocaleLowerCase() === "junior") {
    basicSalary = Math.random() * (1000 - 501) + 500;
  }
  this.salary = Math.floor(basicSalary - basicSalary * 0.075);
};

Employee.prototype.render = function () {
  let cardDiv = document.createElement("div"); // create a div
  cardsSection.appendChild(cardDiv);
  cardDiv.classList.add("card-div");
  //----------------------
  let imgDiv = document.createElement("div");
  let dataDiv = document.createElement("div");
  dataDiv.classList.add("data-div");
  imgDiv.classList.add("img-Div");
  cardDiv.appendChild(imgDiv);
  cardDiv.appendChild(dataDiv);
  let empImg = document.createElement("img"); //create image
  empImg.src = this.imageURL;
  empImg.classList.add("card-img");
  imgDiv.appendChild(empImg);
  //---------------------------
  let empName = document.createElement("p"); // create name
  empName.textContent = `Name :${this.fullName}`;
  dataDiv.appendChild(empName);
  //--------------------------
  let empDepartment = document.createElement("p"); // create department
  empDepartment.textContent = `Department :${this.department}`;
  dataDiv.appendChild(empDepartment);
  //--------------------------
  let empLevel = document.createElement("p"); // create level
  empLevel.textContent = `Level :${this.level}`;
  dataDiv.appendChild(empLevel);
  //--------------------------
  let empID = document.createElement("p"); // create level
  empID.textContent = `ID :${this.employeeID}`;
  dataDiv.appendChild(empID);
  //---------------------------
  let empSalary = document.createElement("p");
  empSalary.textContent = `Salary :${this.salary}`;
  dataDiv.appendChild(empSalary);
};

const saveData = function () {
  let saveJsonData = JSON.stringify(employeesData);
  localStorage.setItem("card", saveJsonData);
};
const getData = function () {
  let getJsonData = localStorage.getItem("card");
  let dataArr = JSON.parse(getJsonData);

  employeesData = [];
  for (let i = 0; i < dataArr.length; i++) {
    new Employee(
      dataArr[i].fullName,
      dataArr[i].department,
      dataArr[i].level,
      dataArr[i].imageURL,
      dataArr[i].salary
    );
  }
};
const doImportantStuff = function () {
  if (!flag) {
    for (let i = 0; i < employeesData.length; i++) {
      employeesData[i].employeeSalary();
      employeesData[i].render();
      flag++;
    }
  } else {
    employeesData[employeesData.length - 1].employeeSalary();
    employeesData[employeesData.length - 1].render();
  }
};

function addCard(event) {
  event.preventDefault();
  let formFullName = document.querySelector("#fname").value;
  let formImgUrl = document.querySelector("#img-url").value;
  let formDepSelector = document.querySelector("#department").value;
  let formLevelSelector = document.querySelector("#level").value;
  new Employee(formFullName, formDepSelector, formLevelSelector, formImgUrl, 0);
  saveData();
  getData();
  doImportantStuff();
}

mainForm.addEventListener("submit", addCard);
getData();
doImportantStuff();

//localStorage.setItem()