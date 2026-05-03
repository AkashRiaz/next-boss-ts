// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: { id: number; name: string }) => {
//   return [value];
// };

const createArrayWithGeneric = <T>(value: T) => [value];

const arrString = createArrayWithGeneric("Apple");

const arrNum = createArrayWithGeneric(222);

const arrObj = createArrayWithGeneric({ id: 123, name: "Mr. x" });

// tuple

const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayTupleWithGeneric("Akash", true);

console.log(res1);

const addStudentToCourse = <T>(studentInfo: T)=>{
    return {
        course: "Next Level",
        ...studentInfo
    }
}

const student1 = {
  id: 123,
  name: "Akash",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Jhankar vai",
  hasCar: true,
  isMarried: true,
};


const result1 = addStudentToCourse(student1)

console.log(result1)

const result2 = addStudentToCourse(student2)
console.log(result2)
