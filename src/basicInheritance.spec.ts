import { Person, Programmer} from './basicInheritance'

test('Can create an instance of the parent class', () => {

  let firstBasemen = new Person("Anthony", "Rizzo");
  let greeting = firstBasemen.GetGreeting();

  expect(greeting).toBe("Hello, my name is Anthony Rizzo.");
})

test('Can create an instance of the child class', () => {

  let firstBasemen = new Programmer("Anders", "Hejlsberg", "TypeScript");
  let greeting = firstBasemen.GetGreeting();

  expect(greeting).toBe("Hello, my name is Anders Hejlsberg. My favorite language is TypeScript.");
})

test('Variable substitution', () => {
  let firstPerson : Person = new Person("Javy", "Baez");
  expect(firstPerson.GetGreeting()).toBe("Hello, my name is Javy Baez.");

  let secondPerson : Person = new Programmer("Don", "Syme", "F#");
  expect(secondPerson.GetGreeting()).toBe("Hello, my name is Don Syme. My favorite language is F#.");
})

function GetLengthOfGreeting(person : Person) : number {
    return person.GetGreeting().length;
}

test('Parameter substitution', () => {
  let firstPerson : Person = new Person("Javy", "Baez");
  expect(GetLengthOfGreeting(firstPerson)).toBe(28);

  let secondPerson : Programmer = new Programmer("Don", "Syme", "F#");
  expect(GetLengthOfGreeting(secondPerson)).toBe(55);
})