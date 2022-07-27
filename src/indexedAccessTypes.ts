import { Programmer } from "./basicInheritance";

export interface Student{
    classGrade : string;
}

export type ProgrammerStudent = Programmer & Student;

type studentGrade = ProgrammerStudent["classGrade"];

function ReportGrade(student : ProgrammerStudent) : studentGrade {
    let grade = student.classGrade;
    return grade;
}



