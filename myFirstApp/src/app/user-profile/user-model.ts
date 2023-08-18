export class User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
  showAge: boolean;

  constructor(
    name: string,
    firstName: string,
    age: number,
    photo: string,
    quote: string = '',
    showAge: boolean = true
  ) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.photo = photo;
    this.quote = quote;
    this.showAge = showAge;
  }

  toggleShowAge(): void {
    this.showAge = !this.showAge;
  }
}
