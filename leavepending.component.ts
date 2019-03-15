import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { LeaveDetails } from '../leave-details';
import { LeavedetailsService } from '../leavedetails.service';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-leavepending',
  templateUrl: './leavepending.component.html',
  styleUrls: ['./leavepending.component.css']
})
export class LeavependingComponent implements OnInit {

  totalRec1 : number;
  count:number;
  order :string ="leaveStartDate";
  reverse :boolean =false;
  sempno :string ='empId';
  rev :boolean = true;
  showButton :boolean;
  leaveDetails :Observable<LeaveDetails[]>;
  empId :number;
  empData :Observable<Employee[]>;
  lpending :LeaveDetails[]=[];
  constructor(private leaveService :LeavedetailsService,private employeeService :EmployeeService, private _router:Router) { 
    this.showButton=false;
    this.empId =parseInt(localStorage.getItem("empid"));
    
    this.leaveDetails = leaveService.getLeavePending(this.empId);
    this.empData =   employeeService.getEmployees(); 
    this.leaveDetails.subscribe(result => { this.totalRec1 = result.length; console.log(result.length)});
    // localStorage.setItem("totalRec1",result.length);
    
  }
  setOrder(value :string) {
    if(this.order ==value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
  tat(stdate) : number { 
    let today = new Date();
    let diffInMs: number = Date.parse(stdate) - Date.parse(today.toDateString());
    let diffInHours: number = Math.floor(diffInMs / 1000 / 60 / 60 / 24);
    
    return diffInHours;

  }
  appshow:boolean=false;

  setClickRowDup(leaveId,empId) {
    // alert(leaveId);
    localStorage.setItem("leavid",leaveId);
    localStorage.setItem("lempId",empId);
    // alert(this.empId);
    this.showButton=true;
    this.appshow =true;

  }
  approveDeny() {
    
        this._router.navigate(["/approveDeny"]);
    
      }


  demo : boolean = false;
  // leavId = [];
  empList= [];
  obj : LeaveDetails;
  mgrId: number;
  status : string;
  message : string;
  msg :string;
  approveAll() {
    this.status="YES";
    
    this.mgrId=parseInt(localStorage.getItem("empid"));
    this.obj=new LeaveDetails();
    let str = this.empList.toString();
    let res = str.split(',');
    for(var v in res) {
      // alert(res[v]);
     this.obj.leaveId=parseInt(res[v]);
     this.obj.leaveMgrComments= "Enjoy";
     this.leaveService.approveDeny(this.mgrId,this.status,this.obj).subscribe(
       dd => {this.message=dd;
   this.msg ="leave appoved succesfully";
      },
      errorMsg => {
        this.message=errorMsg;
        console.log(errorMsg)
      }
     )
     setTimeout(() => {
       this._router.navigate(['/dashboard'])
     },2000);
    }
  }

  checkbox(leaveId, mgrId) {
    // alert("chk " + leaveId);
    var res1 = leaveId + " ";
    this.empList.push(res1);
    // alert("Length "+this.empList.length);
  }
  ngOnInit() {
    this.leaveService.getLeavePending(this.empId).subscribe(res => this.lpending = res); 
  }
}
