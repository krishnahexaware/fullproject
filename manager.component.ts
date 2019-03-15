import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  employee :Observable<Employee>;
  empId :number;
  mang :Employee;
  constructor(private employeeService :EmployeeService) {
    this.empId =parseInt(localStorage.getItem("mgr"));
    this.employee =employeeService.searchEmployee(this.empId);
   }
  ngOnInit() {
    this.employeeService.searchEmployee(this.empId).subscribe(res => this.mang = res); 
  }

}
