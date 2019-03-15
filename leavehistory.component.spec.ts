import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LeavehistoryComponent } from './leavehistory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from '../employee.service';
import { LeavedetailsService } from '../leavedetails.service';
import { of } from 'rxjs/observable/of';
describe('LeaveHistoryComponent', () => {
  let component: LeavehistoryComponent;
  let fixture: ComponentFixture<LeavehistoryComponent>;

  const userServiceStub = {
    getLeaveHistory(empId) {
      console.log('came inside the stub');
      const emps = [
        {
          "leaveEmpId":1000,
          "leaveId":1,
          "leaveType":"EL",
          "leaveStartDate":"2019-05-20",
          "leaveEndDate":"2019-05-20",
          "leaveAppliedOn":"2019-04-20",
          "leaveReason":"sick",
          "leaveNoOfDays":1,
          "leaveStatus":"PENDING",
          "leaveMgrComments":"tc"
        },
        {
          "leaveEmpId":2000,
          "leaveId":1,
          "leaveType":"EL",
          "leaveStartDate":"2019-05-20",
          "leaveEndDate":"2019-05-20",
          "leaveAppliedOn":"2019-04-20",
          "leaveReason":"sick",
          "leaveNoOfDays":1,
          "leaveStatus":"PENDING",
          "leaveMgrComments":"tc"
        }
      ];
      return of( emps );
    }
  };
  beforeEach(async(() => { 
    localStorage.setItem("empId","1000");
    TestBed.configureTestingModule({ 
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports : [NgxPaginationModule,HttpModule, RouterTestingModule],
      declarations: [ LeavehistoryComponent ], 
      providers: [{provide: LeavedetailsService,
        useValue: userServiceStub},EmployeeService]
      // providers : [LeavedetailsService,EmployeeService]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(LeavehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`the name employee id to be 1000`, async(()=>{
    const fixture = TestBed.createComponent(LeavehistoryComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].leaveEmpId).toEqual(1000);
  }));

  it(`the name leave id to be 1`, async(()=>{
    const fixture = TestBed.createComponent(LeavehistoryComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].leaveId).toEqual(1);
  }));
  it(`the name leave id to be EL`, async(()=>{
    const fixture = TestBed.createComponent(LeavehistoryComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].leaveType).toEqual("EL");
  }));
  it(`the name leave start date to be 2019-05-20`, async(()=>{
    const fixture = TestBed.createComponent(LeavehistoryComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].leaveStartDate).toEqual("2019-05-20");
  }));
  it(`the name leave end date to be 2019-05-20`, async(()=>{
    const fixture = TestBed.createComponent(LeavehistoryComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].leaveEndDate).toEqual("2019-05-20");
  }));
  it(`the name leave applied on to be 2019-04-20`, async(()=>{
    const fixture = TestBed.createComponent(LeavehistoryComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].leaveAppliedOn).toEqual("2019-04-20");
  }));
  it(`the name leave reason on to be sick`, async(()=>{
    const fixture = TestBed.createComponent(LeavehistoryComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].leaveReason).toEqual("sick");
  }));
  it(`the name leave no of days on to be sick`, async(()=>{
    const fixture = TestBed.createComponent(LeavehistoryComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].leaveNoOfDays).toEqual(1);
  }));
  it(`the name leave status on to be PENDING`, async(()=>{
    const fixture = TestBed.createComponent(LeavehistoryComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].leaveStatus).toEqual("PENDING");
  }));
  it(`the name manager status on to be tc`, async(()=>{
    const fixture = TestBed.createComponent(LeavehistoryComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].leaveMgrComments).toEqual("tc");
  }));
  it('should render one employee record', async(() => {
    const fixture = TestBed.createComponent(LeavehistoryComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('.employees tr').length).toBe(2);
    });
  }));
});


