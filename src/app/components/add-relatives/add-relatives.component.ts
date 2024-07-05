import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student.model';
import { StudentRelatives } from 'src/app/model/student_relatives.model';
import { StuRelServiceService } from 'src/app/services/stu-services/stu-rel-service.service';
import { StudentService } from 'src/app/services/stu-services/student.service';

@Component({
  selector: 'app-add-relatives',
  templateUrl: './add-relatives.component.html',
  styleUrls: ['./add-relatives.component.scss']
})
export class AddRelativesComponent implements OnInit {

  stuRelArr: StudentRelatives[] = [];
  stu: Student = {} as Student;

  constructor(
    private router: Router,
    private stuRelService: StuRelServiceService,
    private stuService: StudentService
  ) { }

  ngOnInit(): void { }

  onSubmit(form: NgForm): void {
    alert("Relative added successfully...");

    // Transfer form data to object
    const stuRelObj: StudentRelatives = {
      relation: form.value.relation,
      name: form.value.name,
      age: form.value.age
    } as StudentRelatives;

    this.stuRelService.addToRelativesArr(stuRelObj);
    this.stuRelArr = this.stuRelService.getRelativesArr();

    const isConfirm = confirm("Do you want to add one more relative?");
    if (isConfirm) {
      form.resetForm();
    } else {
      this.stu = this.stuRelService.mergeStudentAndRelatives();
      this.addStu(this.stu);

      // Navigate to home
      this.router.navigate(['/all-student']);
      form.resetForm();
    }
  }

  onCancel() { 
    this.stu = this.stuRelService.mergeStudentAndRelatives();
    this.addStu(this.stu);

    // Navigate to home
    this.router.navigate(['/all-student']);
  }


  //add student method
  addStu(student: Student) {
    // Add student by calling service API method
    this.stuService.addStudent(this.stu).subscribe(
      (response: any) => {
        window.alert("Student added successfully.");
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        window.alert("User Student already exist.");
        console.log(error);
      }
    );
  }
}
