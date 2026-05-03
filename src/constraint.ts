type Student = { id: number; name: string };

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

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

const student3 = {
  id: 1243,
  name: "akashuzzaman",
  hasWatch: true,
};

const result = addStudentToCourse(student3);
console.log(result);
