abstract class Person {
  protected name: string;

  protected constructor(name: string) {
    this.name = name;
  }

  public abstract work(): string;
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }

  public work(): string {
    return 'In progress...';
  }
}

let howard = new Employee('Howard', 'Sales');
// let john = new Person("John");
// console.log(howard.name);
