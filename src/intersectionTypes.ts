export function extend<First, Second>(first: First, second: Second): First & Second {
    const result: Partial<First & Second> = {};
    for (const prop in first) {
        (<First>result)[prop] = first[prop];
    }

    for (const prop in second) {
        if (second.hasOwnProperty(prop)) {
            (<Second>result)[prop] = second[prop];
        }
    }
    return <First & Second>result;
}



export class ProgrammerEmployee {
    constructor(public firstName: string, public lastName: string, public favoriteLanuage: string){
    }

    public GetGreeting() : string{
        return `Hello, my name is ${this.firstName} ${this.lastName}. My favorite language is ${this.favoriteLanuage}.`;
    }
}

export class BillableResource{
    public GetInvoiceAmount(hourlyRate : number, hours : number){
        return hours * hourlyRate;
    }
}

