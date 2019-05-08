import { fizzBuzzFunc } from './fizzbuzz'

test('fizzbuzz 1', () => {
    let foo = fizzBuzzFunc(1)
    expect(foo).toBe("1")
})

test('fizzbuzz 2', () => {
    let foo = fizzBuzzFunc(2)
    expect(foo).toBe("2")
})

test('fizzbuzz 3', () => {
    let foo = fizzBuzzFunc(3)
    expect(foo).toBe("fizz")
})

test('fizzbuzz 5', () => {
    let foo = fizzBuzzFunc(5)
    expect(foo).toBe("buzz")
})

test('fizzbuzz 6', () => {
    let foo = fizzBuzzFunc(6);
    expect(foo).toBe('fizz');
})

test('fizzbuzz 10', () => {
    let foo = fizzBuzzFunc(10);
    expect(foo).toBe("buzz");
})
test('fizzbuzz 15', () => {
    let foo = fizzBuzzFunc(15)
    expect(foo).toBe("fizzbuzz")
})
