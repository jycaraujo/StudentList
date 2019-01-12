import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  
  constructor(private httpClient: HttpClient) { }
  
  getDetail(id){
    return new Promise((resolve, reject) => {
      this.httpClient.get("https://test-gradebook.appspot.com/api/student/"+id).subscribe((detail) =>{
        resolve(detail);
      })
    });
  }

}
