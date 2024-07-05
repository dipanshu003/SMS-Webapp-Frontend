import { StudentRelatives } from "./student_relatives.model";

export interface Student{
    id:number,
    firstName:string
    lastName:string,
    email:string
    phoneNumber:string
    age:number
    relatives:StudentRelatives[];

}