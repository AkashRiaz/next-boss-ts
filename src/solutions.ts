// Problem 1: solution

const filterEvenNumbers = (numbers: number[]): number[] => {
  const evenNumber = numbers.filter((singleNumber: number) => {
    if (singleNumber % 2 === 0) {
      return singleNumber;
    }
  });

  return evenNumber;
};

const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);



// Problem 2: solution

const reverseString = (inputValue: string): string => {
  const reversed = inputValue.split("").reverse().join("");
  return reversed;
};

const result2 = reverseString("typescript");



// Problem 3: solution

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
  if (typeof input === "string") {
    return "String";
  } else if (typeof input === "number") {
    return "Number";
  }
};

const result3 = checkType("Hello");



// Problem 4: solution

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };

const result4 = getProperty(user, "name");



// Problem 5: solution

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return {
    ...book,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
const result5 = toggleReadStatus(myBook);



// Problem 6: solution

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
const result6 = student.getDetails();



// Problem 7: solution

const getIntersection = (array1: number[], array2: number[]): number[] => {
  const intersection = array1.filter((value) => array2.includes(value));
  return intersection;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersection = getIntersection(array1, array2);

