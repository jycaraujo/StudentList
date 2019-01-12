import { Injectable, EventEmitter } from '@angular/core';
import { resolve } from 'url';
import { HttpClient } from '@angular/common/http';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getStudents(){
    return new Promise((resolve, reject) => {
      this.httpClient.get("https://test-gradebook.appspot.com/api/student").subscribe((students: Student[]) => {
        resolve(students);
      });
    });
    
  }


}
