export type Grade = "A" | "B" | "C" | "D" | "F"

export function EnterGrade(studentName : string, grade : Grade){
    // TODO - store grade for student
}

type diceRoll = 1 | 2 | 3 | 4 | 5 | 6;

enum myGrade {
    A, B, C, D
}

// Template Literal Types



type GradeModifiers = "+" | "" | "-" 
export type expandedGrades = `${Grade}${GradeModifiers}`

export type correctExpandedGrades = Exclude< `${Grade}${GradeModifiers}` , "F+" | "F-">

export function EnterExpandedGrade(studentName : string, grade : expandedGrades)
{
    // TODO - store grade for student
}