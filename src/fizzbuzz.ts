export function fizzBuzzFunc(x : number) : String {
    if((x % 3) === 0 && x % 5 ===0){
        return "fizzbuzz";
    }
    if(x % 3 === 0){
        return "fizz";
    }
    else if (x % 5 === 0){
        return "buzz";
    }
    return x.toString();
}