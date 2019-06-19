import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComputeService {
  apiEndPoint = 'http://api.mathjs.org/v4/';
  constructor(private http:HttpClient) { }

  calculate(data){
    // console.log(data);
    return this.http.post(this.apiEndPoint,data)
    
  }
}
