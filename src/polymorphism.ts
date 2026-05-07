class Person {
  getSleep() {
    console.log(`The normal person is sleeping 8 hours`);
  }
}

class Student extends Person {
  getSleep(): void {
    console.log(`I am student. I sleep 7 hours`);
  }
}

class NextLevelWebDevelopers extends Person {
  getSleep(): void {
    console.log(`I am next level developer. I sleep 6 hours`);
  }
}

const getSleepingHour = (user: Person) => {
  user.getSleep();
};

const person1 = new Person();
// console.log(person1);

const person2 = new Student();
// console.log(person2);

const person3 = new NextLevelWebDevelopers();
// console.log(person3);

getSleepingHour(person1);
getSleepingHour(person2);
getSleepingHour(person3);

class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  weight: number;

  constructor(height: number, weight: number) {
    super();
    this.height = height;
    this.weight = weight;
  }

  getArea(): number {
    return this.height * this.weight;
  }
}

const getArea = (params: Shape) => {
  console.log(params.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(5, 10);

getArea(shape1);
getArea(shape2);
getArea(shape3);
