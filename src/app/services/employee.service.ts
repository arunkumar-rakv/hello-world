import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url: string = "http://jsonplaceholder.typicode.com/users";

  constructor( private httpClient: HttpClient ) { }

  getUsers(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this.url);
  }

  getEmployees() {
    return ([{
      "id": 1,
      "name": "Emp1"
    }, {
      "id": 2,
      "name": "Emp2"
    }, {
      "id": 3,
      "name": "Emp3"
    }
    ]);
  }
}
