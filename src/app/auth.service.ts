import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/employees/';

  email: string | null = localStorage.getItem('email')
  username: string | null = localStorage.getItem('username')
  id: string = ""
  userID = localStorage.getItem('currentUserID');
  http: any;

  constructor(private apollo: Apollo , http :HttpClient) { }

  logout(): void {
    localStorage.removeItem('currentUserID');
    localStorage.removeItem('token');
    window.localStorage.removeItem('email')
    window.localStorage.removeItem('username')
    this.email = "";
    this.username = "";
    this.id = "";
    window.location.href = "/";
  }


  
  addEmployee(emp:Employee){
    return this.http.post(this.url, emp);
  }

  // getEmployeeList() {
  //   return this.http.get<Employee[]>(this.url);
  // }

  deleteEmployee(id: any){
    return this.http.delete(`${this.url}/${id}`);
  }

  updateEmployee(emp:Employee){
    return this.http.put(`${this.url}/${emp._id}`, emp);
  }

}
