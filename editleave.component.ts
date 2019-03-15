import { Component, OnInit } from '@angular/core';
import { LeaveDetails } from '../leave-details';
import { LeavedetailsService } from '../leavedetails.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editleave',
  templateUrl: './editleave.component.html',
  styleUrls: ['./editleave.component.css']
})
export class EditleaveComponent implements OnInit {

  model=new LeaveDetails();
  message:string;
  msg:String;
  empId : number;
  levId : number;
  isValidFormSubmitted = false;
  calculateDays() {
    let date1: string=this.model.leaveStartDate.toString();
    let date2: string=this.model.leaveEndDate.toString();
    let diffInMs: number = Date.parse(date2) - Date.parse(date1);
    let diffInHours: number = diffInMs / 1000 / 60 / 60/24;
    this.model.leaveNoOfDays=diffInHours + 1;
    
   // alert(diffInHours);
    //console.log(diffInHours);

    //alert("Event Fired");
}
  constructor(public applyLeaveService:LeavedetailsService, public router : Router) {
    this.empId=parseInt(localStorage.getItem("leaveempid"));
    this.levId = parseInt(localStorage.getItem("editlevid")); 
    // alert("Employ ID " +this.empId);
    // alert("LEAVE ID "+this.levId);
   }
   editLeave(form: NgForm)
   {
       this.isValidFormSubmitted=false;
       if(form.invalid){
      //     alert("Invalid");
        return; 
     }  
       console.log ('end date component' + this.model.leaveEndDate);
       this.applyLeaveService.editLeave(this.empId,this.levId,this.model).subscribe(
           success => {
               this.msg=success;
           },
           err => { 
               this.msg=err;
               console.log(err);
           }
       )
       this.isValidFormSubmitted = true;
       setTimeout(() => {
         this.router.navigate(['/LeaveHistory'])
       }
       , 10000);
   }
   cancel()
   {
     this.router.navigate(['/LeaveHistory'])
   }

  ngOnInit() {
  }

}
