
"use strict";
let employeeInfo = [];


function Employee(emploeeID,fullName,department,level,imageURL,salary){
    this.emploeeID=emploeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    this.salary=salary;
    employeeInfo.push(this);
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

Employee.prototype.render= function(){
    document.write(`<h4>Employee name is: ${this.fullName} and his/her salary is: JOD ${this.salary}</h4>`);
    console.log(`<h4>Employee name is: ${this.fullName} and his/her salary is: JOD ${this.salary}</h4>`);
}

let emp1000=new Employee(1000,"Ghazi Samer","Administration","senior","images/noImage.jpg",0);
let emp1001=new Employee(1001,"Lana Ali","Finance","senior","images/noImage.jpg",0); 
let emp1002=new Employee(1002,"Tamara Ayoub","Marketing","senior","images/noImage.jpg",0);
let emp1003=new Employee(1003,"Safi Walid","Administration","mid-senior","images/noImage.jpg",0);
let emp1004=new Employee(1004,"Omar Zaid","Development","senior","images/noImage.jpg",0);
let emp1005=new Employee(1005,"Rana Saleh","Development","junior","images/noImage.jpg",0);
let emp1006=new Employee(1006,"Hadi Ahmad","Finance","mid-senior","images/noImage.jpg",0);

emp1000.empSalary();
emp1001.empSalary();
emp1002.empSalary();
emp1003.empSalary();
emp1004.empSalary();
emp1005.empSalary();
emp1006.empSalary();

emp1000.render();
emp1001.render();
emp1002.render();
emp1003.render();
emp1004.render();
emp1005.render();
emp1006.render();


console.log(employeeInfo);
































// 'use strict';

// let employeeInfo = []; 



// function Employee (Employee_ID,Full_Name,Department,Level,Image_URL,Salary) {

//     this.Employee_ID= Employee_ID;
//     this.Full_Name= Full_Name;
//     this.Department= Department;
//     this.Level = Level;
//     this.Image_URL= Image_URL;
//     this.Salary = Salary;


//     employeeInfo.push(this);
// }

// Employee.prototype.empSalary = function () {

// let finalSalary;

// if(this.level.toLocaleLowerCase()==="senior") {
//     return Math.floor((Math.random() * (2000 - 1500 + 1) + 1500) * 7.5);
   


// }else if (this.leveltoLocaleLowerCase()==="Mid-Senior"){
//     return Math.floor((Math.random() * (2000 - 1500 + 1) + 1500) * 7.5);
    

// }else if (this.leveltoLocaleLowerCase()==="junior"){
//     return Math.floor((Math.random() * (2000 - 1500 + 1) + 1500) * 7.5);
  
// }

// Employee.prototype.render= function(){
//     document.write(`<h2>Employee name is: ${this.Full_Name} and his/her salary is: ${this.Salary}</h2>`);
//     console.log(`<h2>Employee name is: ${this.FullName} and his/her salary is: ${this.Salary}</h2>`);
// }



// let emp1000 = new Employee (1000, "Ghazi Samer", "Administration" , "senior" ,"images/noImage.jpg",0 );
// let emp1001 = new Employee (1001, "Lana Ali	", "Finance" , "senior" ,"images/noImage.jpg", 0 );
// let emp1002 = new Employee (1002, "Tamara Ayoub	", "Marketing" , "senior" ,"images/noImage.jpg", 0 );
// let emp1003 = new Employee (1003, "Safi Walid	", "Administration" , "Mid-Senior" ,"images/noImage.jpg", 0 );
// let emp1004 = new Employee (1004, "Omar Zaid	", "Development" , "senior" ,"images/noImage.jpg", 0 );
// let emp1005 = new Employee (1005, "Rana Saleh	", "Development" , "Junior" ,"images/noImage.jpg", 0 );
// let emp1006 = new Employee (1006, "Hadi Ahmad	", "Finance" , "Mid-Senior" ,"images/noImage.jpg", 0 );

// console.log(employeeInfo);



