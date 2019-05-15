import {extend, ProgrammerEmployee, BillableResource } from './intersectionTypes'

test('Can create Programmer', () => {
    let p = new ProgrammerEmployee('Don', 'Syme', "F#");
    expect(p.GetGreeting()).not.toBeNull();
})

test('can create billable resource', () => {
    let b = new BillableResource();
    expect(b.GetInvoiceAmount(10, 8)).toBe(80);
})

test('Can create intersection type', () => {
    const don = extend(new ProgrammerEmployee('Don', 'Syme', 'F#'), BillableResource.prototype);
    expect(don.GetInvoiceAmount(10, 8)).toBe(80);
    let greeting = don.GetGreeting();
    expect(greeting).not.toBeNull();
})
    
test('Can create intersection type', () => {
    const don = extend(new  ProgrammerEmployee('Don', 'Syme', 'F#'), BillableResource.prototype);

    let prog : ProgrammerEmployee = don;
    expect(prog.GetGreeting()).not.toBeNull();
    //expect(prog.GetInvoiceAmount(10, 8)).toBe(80);

    let resource : BillableResource = don;
    //expect(resource.GetGreeting()).not.toBeNull();
    expect(resource.GetInvoiceAmount(10, 8)).toBe(80);

})

    

