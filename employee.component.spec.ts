import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { of } from 'rxjs/observable/of';
import { EmployeeService } from '../employee.service';
import { HttpModule } from '@angular/http';

const userServiceStub = {
  searchEmployee(empId) {
    console.log('came inside the stub');
    const emps = [
      {
      "empId":3000,
      "empFullName":"Krish",
      "empEmail":"Krish@HEXAWARE.COM",
      "empMobileNo":"1234567890",
      "empDateOfJoining":"2018-12-20",
      "empDepartment":"INNOVATION",
      "empMgrId":0,
      "empAvailLeavBal":26
      }
    ];
    console.log('came outside the stub');
    return of( emps );
  }
};

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let employService : EmployeeService;
  let fixture: ComponentFixture<EmployeeComponent>;
  console.log('came inside the emp');
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      declarations: [ EmployeeComponent ],
      providers: [{provide: EmployeeService, 
      useValue: userServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => { 
    employService = TestBed.get(EmployeeService);
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.empid=3000;
  });

  // xit(`the name employee Id to be '3000'`, async(()=>{
  //   console.log('came inside the empsd');
  //   const fixture = TestBed.createComponent(EmployeeComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   spyOn(employService, 'searchEmployee').and.returnValue( of (userServiceStub));
  //   app.ngOnInit();
  //   alert(app.employ);
  //   console.log(app.employ);
  //   expect(app.employee.empId).toEqual(3000);
  // }));

  it('should return a single user', () => {
    const userResponse =  {
      "empId":1000,
      "empFullName":"Dhivya.B",
      "empEmail":"DhivyaB@hexaware.com",
      "empMobile":"9566773044",
      "empDateOfJoining":"2019-10-22",
      "empMgrId":0,
      "empDepartment":"Developer",
      "empAvailabeLeave":94
      };
    let response;
    spyOn(employService, 'searchEmployee').and.returnValue( of (userResponse));

    employService.searchEmployee(1000).subscribe(res => {
      response = res;
    });

    expect(response).toEqual(userResponse);
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
