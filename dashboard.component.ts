import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Routes,RouterModule } from '@angular/router';
import { Observable } from "rxjs/Rx";
import { LeavedetailsService } from "../leavedetails.service";
import { LeaveDetails } from "../leave-details";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  empId :number;
  name1 :string;
  manager : string;
  totalRec1 : number;
  leaveDetails :Observable<LeaveDetails[]>;
  constructor(private leaveService :LeavedetailsService, private empService :EmployeeService, private _router : Router) {
    this.name1 =localStorage.getItem("empid");
    this.manager=localStorage.getItem("mgr");
    // this.name = this.route.snapshot.params["name"];
    this.leaveDetails = leaveService.getLeavePending(this.empId);
    this.leaveDetails.subscribe(result => { this.totalRec1 = result.length; console.log(result.length)});
      // alert(this.totalRec1);

    
   }
  
  // applyLeave() {
  //   this._router.navigate(["/applyLeave"]);
  // }
  // history() {
  //   this._router.navigate(["/LeaveHistory"]);
  // }

  
  ngOnInit() {
  }
  

}
