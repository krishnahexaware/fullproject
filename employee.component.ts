import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee :Observable<Employee>;
  empid :number;
  constructor(private employeeService :EmployeeService) {
    this.empid =parseInt(localStorage.getItem("empid"));
    this.employee =employeeService.searchEmployee(this.empid);
   }

  ngOnInit() {
  }

}
