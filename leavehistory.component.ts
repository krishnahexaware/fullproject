import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveDetails } from '../leave-details';
import { Employee } from '../employee';
import { LeavedetailsService } from '../leavedetails.service';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leavehistory',
  templateUrl: './leavehistory.component.html',
  styleUrls: ['./leavehistory.component.css']
})
export class LeavehistoryComponent implements OnInit {

  page: number = 1;
  totalRec : number;
  leaveDetails :Observable<LeaveDetails[]>;
  empId :number;
  empData :Observable<Employee[]>;
  emps:LeaveDetails[] = [];
  constructor(private leaveService :LeavedetailsService,private employeeService :EmployeeService,  private _router : Router) { 
    this.empId =parseInt(localStorage.getItem("empid"));
    this.leaveDetails = leaveService.getLeaveHistory(this.empId);
    this.empData =   employeeService.getEmployees(); 
    this.leaveDetails.subscribe(result => { this.totalRec = result.length; console.log(result.length)});
  }

  // setClickRowDup(leaveId,empId) {
  //   alert(leaveId+"levhis");
    
  //   alert(this.empId+"levhis");
  //   // this._router.navigate(['/editleave',leaveId]);
  //   // localStorage.setItem("editempid",empId);
  //   this._router.navigate(["/editleave"]);
  
  // }
  Edit(leaveId,leaveEmpId) { 
    // alert("Hi");
    localStorage.setItem("editlevid",leaveId);
    // alert(leaveId);
    localStorage.setItem("leaveempid",leaveEmpId);
    // alert(leaveEmpId);
    this._router.navigate(["/editleave"]);
     
  }

  ngOnInit() {
    this.leaveService.getLeaveHistory(this.empId).subscribe(c => this.emps = c); 
  }

}
