import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name : string;
  password : string;
  
  constructor(private empService :EmployeeService, private _router : Router) {
    this.name=localStorage.getItem("empid");
   }
   login() {
    if(this.name == localStorage.getItem("empid") && this.password=="1111"){
      // alert("redirecting");
     this._router.navigate(["/DashBoard"]);
       
    }
    else {
      alert("unsuccessfully");
    }

  }
  ngOnInit() {
  }

}
