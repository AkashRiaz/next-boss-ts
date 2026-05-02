type UserRole = "admin" | "user" ;

const getDashboard = (role: UserRole) =>{

    if(role === "admin"){
        return "Admin Dashboard";
    }else if(role === 'user') {
        return "User Dashboard";
    }else{
        return "Guest Dashboard";
    }
}


const result = getDashboard("admin");

// console.log(result);

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
}

type Manager = {
    designation: string;
    teamSize: number;
}


type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
    id: "E001",
    name: "Chowdhury Shaheb",
    phoneNo: "01700000000",
    designation: "Manager",
    teamSize: 10
}

console.log(ChowdhuryShaheb);