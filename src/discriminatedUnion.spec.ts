import { Programmer, ProgrammerLookupResult, ProgrammerRepository} from "./discriminatedUnion"


test("retreive programmer", () => {
    let repository = new ProgrammerRepository();
    let result = repository.GetByName("Brendan Eich");
})