import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css']
})
export class EmployComponent implements OnInit {
  name2 : string;
  emp :Observable<Employee[]>;
  empid : number;
  emps:Employee[] = [];
  constructor(private empService :EmployeeService, private _router : Router) { 
    this.emp= empService.getEmployees();
    this.name2 == localStorage.getItem("empid") ;
  }

  login(empId,empMgrId) {
    localStorage.setItem("empid",empId);
    localStorage.setItem("mgr",empMgrId);
    this._router.navigate(["/login"]);
  }
  ngOnInit() {
    this.empService.getEmployees().subscribe(c => this.emps = c); 
  }

}
