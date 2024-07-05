import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/stu-services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  student: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    age: 0,
    relatives: []
  };

  constructor(
    private route: ActivatedRoute,
    private stuService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDataFromURL();
  }

  getDataFromURL(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.fetchStudentById(id);
    });
  }

  fetchStudentById(id: number): void {
    this.stuService.getStudentById(id).subscribe(
      (response: any) => {
        this.student = response;
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        alert('Something went wrong while fetching the student details.');
      }
    );
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.stuService.updateStudent(this.student).subscribe(
      (response: any) => {
        alert(`${response.firstName} updated successfully.`);
        this.router.navigateByUrl("/all-student");
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        alert("Something went wrong while updating the student.");
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/student-details']);
  }

  addRelative(): void {
    this.student.relatives.push({ id: 0, relation: '', name: '', age: 0 });
  }
}
