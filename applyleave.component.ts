import { Component, OnInit } from '@angular/core';
import { LeaveDetails } from '../leave-details';
import { LeavedetailsService } from '../leavedetails.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {
  
  
  model=new LeaveDetails();
  message:string;
  msg:String;
  msg1:number;
  empId : number;
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
    this.empId=parseInt(localStorage.getItem("empid"));
  //   // alert("Employ ID " +this.empId);
  //   if(this.msg==" Leave Auto_Approved"){
  //     this.msg1=1;
  // }
    }
          

   
   applyLeave(form: NgForm)
   {
       this.isValidFormSubmitted=false;
       if(form.invalid){
      //     alert("Invalid");
        return; 
     }  
       console.log ('end date component' + this.model.leaveEndDate);
       this.applyLeaveService.applyLeave(this.empId,this.model).subscribe(
           success => {
               this.msg=success;
               if (this.msg =="Leave Auto_Approved" || this.msg=="Holidays deducted and Leave Auto_Approved"
                   || this.msg == "Holidays deducted and Leave Applied Successfully...."
                   || this.msg == "Leave Applied Successfully...." ) {
                this.msg1=1;
          }
          if (this.msg =="Applied Date Come Under Company Holiday and Saturday Sunday" || this.msg=="You can't Apply leave on Company Holidays"
          || this.msg == "You can't Apply leave on Saturday and Sunday"
          || this.msg == "End date Should be greater than Start date"
          || this.msg == "You can't Apply on Past Date."
          || this.msg == "Insufficent Leave Balance..."
          || this.msg == "Enter the Correct No Of days "
          || this.msg == "Already Applied on Given Dates..."
          || this.msg == "EmpId not Found" ) {
       this.msg1=0;
 }
           },
           err => { 
               this.msg=err;
               console.log(err);
           }
       )
       this.isValidFormSubmitted = true;
       setTimeout(() => {
         this.router.navigate(['/DashBoard'])
       }
       , 10000);
   }
   cancel()
   {
     this.router.navigate(['/DashBoard'])
   }
  ngOnInit() {
  }

}
