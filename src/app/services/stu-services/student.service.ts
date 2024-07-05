import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL:string="http://localhost:8080/apis";

  constructor(private http:HttpClient) { }

  getAllStudents()
  {
    return this.http.get(`${this.baseURL}/get-all`);
  }

  addStudent(student:Student)
  {
    return this.http.post(`${this.baseURL}/add`,student,{
      responseType:"text"
    })
  }

  deleteStudent(id:any)
  {
    return this.http.delete(`${this.baseURL}/delete/${id}`,{
      responseType:"text"
    })
  }
  getStudentById(id:number)
  {
    return this.http.get(`${this.baseURL}/get/${id}`);
  }

  updateStudent(student :Student)
  {
    return this.http.put(`${this.baseURL}/update`,student);
  }
}
