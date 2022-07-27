export type Grade = "A" | "B" | "C" | "D" | "F"
type diceRoll = 1 | 2 | 3 | 4 | 5 | 6;

export function EnterGrade(studentName : string, grade : Grade){
    // TODO - store grade for student
}

enum myGrade {
    A, B, C, D
}

// Template Literal Types
type GradeModifiers = "+" | "" | "-"
type expandedGrades = `${Grade}${GradeModifiers}`

export function EnterExpandedGrade(studentName : string, grade : expandedGrades)
{
    // TODO - store grade for student
}