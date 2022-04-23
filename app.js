
"use strict";
let employeeInfo = [];
let formEl = document.getElementById ("contact-form");
let sectionEl = document.getElementById("cardSection");

function Employee(employeeID,fullName,department,level,imageURL,salary){
    this.employeeID=employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    this.salary=salary;
    employeeInfo.push(this);
}



    Employee.prototype.render = function(){
        let name = document.createElement('h3'); 
    name.textContent = this.name; 
    sectionEl.appendChild(name)  
    


}

   
    
   

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

 Employee.prototype.emploeeID  = function() {
    let idNum;
    idNum = Math.floor(Math.random() * 10000);
        
      return  this.employeeID = idNum;
    
}
 

Employee.prototype.render= function(){
    // document.write(`<h4>Employee name: ${this.fullName} Employee_id ${this.employeeID} Employee department: ${this.department} Employee Level:${this.level}</h4>`);
    // console.log(`<h4></h4>`);
}

let emp1000=new Employee(0,"Ghazi Samer","Administration","senior","images/noImage.jpg",0);
let emp1001=new Employee(1001,"Lana Ali","Finance","senior","images/noImage.jpg",0); 
let emp1002=new Employee(1002,"Tamara Ayoub","Marketing","senior","images/noImage.jpg",0);
let emp1003=new Employee(1003,"Safi Walid","Administration","mid-senior","images/noImage.jpg",0);
let emp1004=new Employee(1004,"Omar Zaid","Development","senior","images/noImage.jpg",0);
let emp1005=new Employee(1005,"Rana Saleh","Development","junior","images/noImage.jpg",0);
let emp1006=new Employee(1006,"Hadi Ahmad","Finance","mid-senior","images/noImage.jpg",0);




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
//  console.log(generatedEmployee);

}

