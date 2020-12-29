import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  private employeeId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.employeeId = this.route.snapshot.paramMap.get('id')
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.employeeId = parseInt(params.get('id'));
    })
  }

  onPrevious() {
    this.router.navigate(['/employees', this.employeeId - 1]);
    
  }

  onNext() {
    this.router.navigate(['/employees', this.employeeId + 1]);
  }
}
