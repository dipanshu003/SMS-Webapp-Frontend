import { Injectable } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { StudentRelatives } from 'src/app/model/student_relatives.model';

@Injectable({
  providedIn: 'root'
})
export class StuRelServiceService {

  student:Student={
    id:0,
    age:0,
    email:"",
    firstName:"",
    lastName:"",
    phoneNumber:"",
    relatives:[]
  }

  relatives:StudentRelatives[]=[];
  constructor() { }

  addToRelativesArr(relative:StudentRelatives)
  {
    this.relatives.push(relative);
  }

  getRelativesArr()
  {
    return this.relatives;
  }

  addToStudent(studentObj:Student)
  {
    this.student.age=studentObj.age;
    this.student.email=studentObj.email;
    this.student.firstName=studentObj.firstName;
    this.student.lastName=studentObj.lastName;
    this.student.phoneNumber = studentObj.phoneNumber;
  }
  getSdutent()
  {
    return this.student;
  }

  mergeStudentAndRelatives()
  {
    let stu=this.getSdutent();
    let relArr = this.getRelativesArr();
    stu.relatives.push(...relArr);

    

    return stu;

  }
}
