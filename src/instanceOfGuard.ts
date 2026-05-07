class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfHour: number) {
    console.log(`${this.name} doinik ${numOfHour} ghonta Ghumai`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfHour: number) {
    console.log(`${this.name} doinik ${numOfHour} ghonta pora lekha kore`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfHour:number){
    console.log(`${this.name} doinik ${numOfHour} ghonta se class nei`)
  }
}

const getUserInfo = (user: Person)=>{
    if(user instanceof Student){
        user.doStudy(10);
    }else if(user instanceof Teacher){
        user.takeClass(4)
    }else{
        user.getSleep(2)
    }
}

const student1 = new Student("Mr student")
const teacher1 = new Teacher("Mr teacher")

getUserInfo(teacher1)
