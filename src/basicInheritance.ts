export class Person {
    constructor(public firstName: string, public lastName: string){
    }

    public GetGreeting() : string{
        return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
}

export class Programmer extends Person {

    constructor(firstName: string, lastName: string, public favoriteLanuage: string){
        super(firstName, lastName);
    }

    public GetGreeting() : string {
        return `${super.GetGreeting()} My favorite language is ${this.favoriteLanuage}.`;
    }
}


