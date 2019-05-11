import { Programmer, Tester, SprintTask, ProductOwner} from "./unionTypes"
import { AssertionError } from "assert";

test("Can create programmer", () =>{
    let p = new Programmer("Anders Hejlsberg", "Delphi");
    expect(p.GetName()).toBe("Anders Hejlsberg");
    expect(p.GetFavoriteLanguage()).toBe("Delphi");
})

test("Can create tester", () =>{
    let t = new Tester("Bobby Tables", 1000);
    expect(t.GetName()).toBe("Bobby Tables");
})

test("Can pass union to union types", () => {
    let p = new Programmer("Anders Hejlsberg", "Delphi");
    let t = new Tester("Bobby Tables", 1000);
    let task = new SprintTask();

    task.Assign(p);
    expect(task.GetAssigned()).toBe("Anders Hejlsberg");

    task.Assign(t);
    expect(task.GetAssigned()).toBe("Bobby Tables");
})


test("Cannot pass other types to union types", () => {
    let po = new ProductOwner("Chris Accountant", "Senior Accountant");

    let task = new SprintTask();
    //task.Assign(po); // Won't compile
})