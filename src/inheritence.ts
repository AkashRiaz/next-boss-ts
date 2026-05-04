class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    ((this.name = name), (this.age = age), (this.address = address));
  }

  getSleep(hour: string) {
    console.log(`${this.name} ${hour} ghonta ghumai`);
  }
}

class Student extends Person {
  rollNumber: number;

  constructor(name: string, age: number, address: string, rollNumber: number) {
    super(name, age, address);
    this.rollNumber = rollNumber;
  }
}

const student1 = new Student("Mr. Akash", 18, "bangladesh", 1);

student1.getSleep("10");
console.log(student1.rollNumber)

class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(numberOfClass: number) {
    console.log(`${this.name} ${numberOfClass} ghonta class nei`);
  }
}

const teacher1 = new Teacher("Mr Rahim", 28, "Bangladesh", "senior teacher");

console.log(teacher1.name);
