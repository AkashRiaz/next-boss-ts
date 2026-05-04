class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}

  makeSound() {
    console.log(`The animal is making sound: ${this.sound}`);
  }
}

const dog = new Animal("Dog", "dog1", "ghew-ghew");

const cat = new Animal("Cat vhai", "cat", "mew-mew");

dog.makeSound();

// console.log(dog)
// console.log(cat)
