import { EnterGrade } from "./stringLiterals"

test("Can assign grade", () => {
    EnterGrade("Eric Potter", "B");
})


test("Cannot assign invalid grade", () => {
    //EnterGrade("Eric Potter", "E"); // won't compile
})


