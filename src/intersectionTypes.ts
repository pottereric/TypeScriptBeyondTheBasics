//export function extend<First, Second>(first: First, second: Second): First & Second {
//    const result: Partial<First & Second> = {};
//    for (const prop in first) {
//        (<First>result)[prop] = first[prop];
//    }

//    for (const prop in second) {
//        if (second.hasOwnProperty(prop)) {
//            (<Second>result)[prop] = second[prop];
//        }
//    }
//    return <First & Second>result;
//}



export interface ProgrammerEmployee {
    firstName: string; 
    lastName: string;
    favoriteLanuage: string;

}

export interface BillableResource{
    hourlyRate : number;
}

