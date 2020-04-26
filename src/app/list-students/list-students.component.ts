import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/services/student.service';
import { Student } from '../shared/models/student';
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(private studentService: StudentService) { }
students: Student[];

ngOnInit(): void {
this.getAllStudents();
}
getAllStudents() {
this.studentService.getStudentsList().subscribe(data => {
this.students = data.map(e => {
return {
id: e.payload.doc.id,
...e.payload.doc.data() as Student
};
})
});
}
delete(id: string) {
  Swal.fire({
    title: "Vous etes Sure?",

    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmer",
    cancelButtonText: "Annuler",
  }).then((result) => {
    this.studentService.deleteStudent(id);
  });
}
}