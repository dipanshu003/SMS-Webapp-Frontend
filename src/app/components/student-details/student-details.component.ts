import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/stu-services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  student: Student = {} as Student;

  constructor(
    private route: ActivatedRoute,
    private stuService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDataFromURL();
  }

  getDataFromURL(): void {
    this.route.paramMap.subscribe((param: any) => {
      const id = +param.get('id');
      this.fetchStudentById(id);
    });
  }

  fetchStudentById(id: number): void {
    this.stuService.getStudentById(id).subscribe(
      (response: any) => {
        console.log('Student by id => ', response);
        this.student = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        alert('Something went wrong..');
      }
    );
  }

  onDelete(id: number): void {
    const isWanted = confirm('Do you want to delete this student?');

    if (isWanted) {
      this.stuService.deleteStudent(id).subscribe(
        (response: any) => {
          console.log(response);
          window.alert('Student deleted successfully.');
          this.router.navigate(['/all-student']);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          alert('Something went wrong while deleting the student!!');
        }
      );
    }
  }
}
