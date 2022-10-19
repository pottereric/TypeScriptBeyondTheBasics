import { EnterExpandedGrade, EnterGrade } from "./stringLiterals"

test("Can assign grade", () => {
    EnterGrade("Eric Potter", "B");
})

test("Cannot assign invalid grade", () => {
    // EnterGrade("Eric Potter", "E"); // won't compile
})


test("Can assign expanded grade", () => {
    EnterExpandedGrade("Eric Potter", "A+");
})

test("F- is not a valid grade", () => {
    EnterExpandedGrade("Eric Potter", "F-");
})
