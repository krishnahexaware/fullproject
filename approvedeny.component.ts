import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { LeaveDetails } from '../leave-details';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { LeavedetailsService } from '../leavedetails.service';

@Component({
  selector: 'app-approvedeny',
  templateUrl: './approvedeny.component.html',
  styleUrls: ['./approvedeny.component.css']
})
export class ApprovedenyComponent implements OnInit {

  lempId :number;
  leaveId :number;
  msg :string;
  status :string;
  obj = new LeaveDetails();
  empId:number;
  leaveDetails: Observable<LeaveDetails>;
  employee : Observable<Employee>;
  constructor(private empService :EmployeeService, private _router : Router,private leaveService :LeavedetailsService) {
    this.lempId=parseInt(localStorage.getItem("lempId"));
    this.empId =parseInt(localStorage.getItem("empid"));
    this.leaveId = parseInt(localStorage.getItem("leavid"));
    // alert(this.leaveId);
    this.employee =empService.searchEmployee(this.lempId);
    this.leaveDetails = leaveService.getLeaveDetail(this.leaveId)
   }

   approve() {
     this.obj.leaveId =this.leaveId;
     this.status ="YES";
     this.leaveService.approveDeny(this.empId,this.status,this.obj).subscribe(
       success =>{
         this.msg =success;
       },
       errorMsg => {
         this.msg =errorMsg;
         console.log(errorMsg);
       }
     )
   }
   deny() {
    this.obj.leaveId =this.leaveId;
    this.status ="NO";
    this.leaveService.approveDeny(this.empId,this.status,this.obj).subscribe(
      dd =>{
        this.msg =dd;
      },
      errorMsg => {
        this.msg =errorMsg;
        console.log(errorMsg);
      }
    )
  }
  cancel() {

    this._router.navigate(["/DashBoard"]);

  }

  ngOnInit() {
  }

}
