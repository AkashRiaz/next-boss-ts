type UserRole = "admin" | "moderator" | "guest";

const getDashboard =(role: UserRole) =>{
    if(role === "admin"){
        return "Admin Dashboard";
    }else if(role === "moderator"){
        return "Moderator Dashboard";
    }else{
        return "Guest Dashboard";
    }
}

console.log(getDashboard("admin")); 
// console.log(getDashboard("moderator"));


type Employee = {
    id: number;
    name: string;
    phoneNO: string;
}

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager;

const AkashSaheb: EmployeeManager= {
    name: "Akash Riaz",
    id: 123,
    phoneNO: "123-456-7890",
    designation: "Software Engineer",
    teamSize: 5
}