type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails;

const getProfile = (employee: Employee):string => {
  const { name, age, role, salary } = employee;

  return `Name: ${name}, Role: ${role}`;
};

const employee1: Employee = {
  name: "Md Akashuzzaman Riaz",
  age: 26,
  role: "Frontend Engineer",
  salary: 2600000000,
};

const result = getProfile(employee1);
console.log(result)
