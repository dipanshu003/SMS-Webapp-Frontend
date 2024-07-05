import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/stu-services/student.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.scss']
})
export class AllStudentComponent implements OnInit {

  allStudents: Student[] = [];

  constructor(private stuService: StudentService) { }

  ngOnInit(): void {
    this.fetchAllStudents();
  }

  fetchAllStudents(): void {
    this.stuService.getAllStudents().subscribe(
      (response: any) => {
        console.log('All Students =>', response);
        this.allStudents = response;
      },
      (error: HttpErrorResponse) => {
        if (error.status === 0) {
          alert('Please start the server.');
        } else {
          console.log('Something went wrong while fetching all students...');
        }
      }
    );
  }
}
