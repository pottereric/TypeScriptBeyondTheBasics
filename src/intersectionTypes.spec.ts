import { ProgrammerEmployee, BillableResource } from './intersectionTypes'

test('Can create Programmer', () => {
    let p : ProgrammerEmployee = { 
        "firstName" : "Don", 
        "lastName" : "Syme", 
        "favoriteLanuage" : "F#"
    };
    expect(p.favoriteLanuage).not.toBeNull();
})

test('can create billable resource', () => {
    let b : BillableResource = {
        "hourlyRate" : 42
    };
    expect(b.hourlyRate).toBe(42);
})

test('Can create intersection type', () => {
    const don : ProgrammerEmployee & BillableResource = { 
        "firstName" : "Don", 
        "lastName" : "Syme", 
        "favoriteLanuage" : "F#",
        "hourlyRate" : 42
    };
    expect(don.hourlyRate).toBe(42);
    expect(don.favoriteLanuage).not.toBeNull();
})
    


    

