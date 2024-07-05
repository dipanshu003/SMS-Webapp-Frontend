import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student.model';
import { StuRelServiceService } from 'src/app/services/stu-services/stu-rel-service.service';
import { StudentService } from 'src/app/services/stu-services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(private stuService:StudentService,
    private router : Router,
    private stuRelService:StuRelServiceService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {

    const isConform=confirm("Wanna add relatives?");

    if(isConform)
      {
        //redirect add relatives page
        this.router.navigateByUrl("/add-relatives");
        this.stuRelService.addToStudent(form.value);
        console.log("Student before adding relatives => "+this.stuRelService.getSdutent());
        
      }
    else{
      //redirect to all students page
      this.router.navigateByUrl("/all-student");

      this.stuService.addStudent(form.value).subscribe((response:any)=>{
        alert(response);
      },(error:HttpErrorResponse)=>{
        console.log(error);
        alert("Something went wrong to add student 1");
      })
    }
  }

  createStudent(student:Student)
  {
   this.stuService.addStudent(student).subscribe((response:any)=>{
    console.log(response);
   },(error:HttpErrorResponse)=>{
    console.log("Something went wrong to add student..");
   }) 
  }
}
