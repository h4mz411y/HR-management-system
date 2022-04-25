"use strict";
let employeeInfo = [];
let cardSection = document.getElementById("cards-section");
let formEl = document.getElementById ("contact-form"); 

// Employee main function

function Employee(employeeID,fullName,department,level,imageURL,salary){
    this.employeeID=employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    this.salary=salary;
    employeeInfo.push(this); 
}



// The render function
Employee.prototype.render= function(){
    // creat a div inside card section 
    let cardDiv = document.createElement("div"); 
    cardSection.appendChild(cardDiv);
    cardDiv.classList.add("card");

    // render full name 
    let empName = document.createElement("h3"); 
    empName.textContent = this.fullName;
    cardDiv.appendChild(empName);

     // render Department
     let empDepartment = document.createElement("p"); 
     empDepartment.textContent = this.department;
     cardDiv.appendChild(empDepartment);

     // render Level 
     let empLevel = document.createElement("p"); 
     empLevel.textContent = this.level;
     cardDiv.appendChild(empLevel);

     // render Image 
     let empImg = document.createElement("img");
     empImg.src = this.imageURL ;
     cardDiv.appendChild(empImg);
     empImg.classList.add("img1");

    //  render id
    let empID = document.createElement("p");  
    empID.textContent = this.employeeID;
    cardDiv.appendChild(empID);
};







// salary genereator

Employee.prototype.empSalary= function(){
    let basicSalary;
    if(this.level.toLocaleLowerCase()==="senior") {
        basicSalary= Math.floor(Math.random() * (2000 - 1500 + 1) ) + 1500;
       



    }else if (this.level.toLocaleLowerCase()==="mid-senior") {
        basicSalary=Math.floor(Math.random() * (1500 - 1000 + 1) ) + 1000;


    }else if (this.level.toLocaleLowerCase()==="junior") {
        basicSalary=Math.floor(Math.random() * (1000 - 500 + 1) ) + 500;


    }
    this.salary=(basicSalary - (basicSalary *0.075));
}

// ID number generatore 
Employee.prototype.emploeeID  = function() {
    
    let idNum = Math.floor(Math.random() * 10000);
    
      return  idNum = this.employeeID ;

    
    
     
}


// Employyes basic data 
let emp1000=new Employee(1000,"Ghazi Samer","Administration","senior","images/noImage.jpg",0);
let emp1001=new Employee(1001,"Lana Ali","Finance","senior","images/noImage.jpg",0); 
let emp1002=new Employee(1002,"Tamara Ayoub","Marketing","senior","images/noImage.jpg",0);
let emp1003=new Employee(1003,"Safi Walid","Administration","mid-senior","images/noImage.jpg",0);
let emp1004=new Employee(1004,"Omar Zaid","Development","senior","images/noImage.jpg",0);
let emp1005=new Employee(1005,"Rana Saleh","Development","junior","images/noImage.jpg",0);
let emp1006=new Employee(1006,"Hadi Ahmad","Finance","mid-senior","images/noImage.jpg",0);



//EventListener to git the input from the user 
formEl.addEventListener("submit", handleSubmit );
function handleSubmit(event) {
    event.preventDefault();
    let full_Name = event.target.form_name.value;
    let image_url = event.target.form_image.value ;
    let department = event.target.form_need.value ;
    let level = event.target. form_need2.value ;
    let employeeID =Employee.employeeID;
    let salary = Employee.salary;
    let generatedEmployee = new Employee (employeeID,full_Name,department,level,image_url,salary);
    let generatedEmployeeName = new Employee (full_Name);
    let generatedEmployeeDepartment = new Employee (department);
    let generatedEmployeeLevel = new Employee (level);
    let generatedEmployeeUrl = new Employee (image_url);

    console.log(generatedEmployeeName);
    console.log(generatedEmployeeDepartment);
    console.log(generatedEmployeeLevel);
    console.log(generatedEmployeeUrl);
    
     generatedEmployee.render();
     saveData(employeeInfo);
}


  // Local storage 

  function saveData(data) {

    let stringfiyData = JSON.stringify(data);
    localStorage.setItem("employees", stringfiyData);
}

function getData() {
    let retrievedData = localStorage.getItem("Employee");
    let arrayData = JSON.parse(retrievedData);
    // each object doesn't has access to render method
    if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
            // reinstantiation: re creating instance
            new Employee(arrayData[i].employeeID, arrayData[i].fullName, arrayData[i].department, arrayData[i].level, arrayData[i].imageURL, arrayData[i].salary);
            // each obecjt has access to render method and all other Drink methods
        }
    }

    renderAll();
}

getData();
