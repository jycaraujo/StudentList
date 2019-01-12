import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students: Student[];
  constructor(private appService: AppService) {
    this.students = []
   }

  ngOnInit() {
    this.appService.getStudents().then((students: Student[]) =>  {
      this.students = students;
    });
  }

}
