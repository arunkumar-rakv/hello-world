import { Component, OnInit } from '@angular/core';
import {  EmployeeService } from "../employee.service";
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  empList = [];
  ngOnInit() {
    //this.empList = this.employeeService.getEmployees();
    this.employeeService.getUsers().subscribe( employees => this.empList = employees);
  }

}
