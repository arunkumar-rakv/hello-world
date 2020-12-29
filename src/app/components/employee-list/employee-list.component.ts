import { Component, OnInit } from '@angular/core';
import {  EmployeeService } from "../../services/employee.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router, 
    private route: ActivatedRoute) { }

  empList = [];
  ngOnInit() {
    //this.empList = this.employeeService.getEmployees();
    this.employeeService.getUsers().subscribe( employees => this.empList = employees);
  }

  onClick(emp) {
    //this.router.navigate(['/employees', emp.id]);
    this.router.navigate([emp.id], {relativeTo: this.route})
  }

}
