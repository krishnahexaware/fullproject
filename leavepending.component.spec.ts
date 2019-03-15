import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { LeavependingComponent } from './leavepending.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SortdataPipe } from '../sortdata.pipe';
import { EmployeeService } from '../employee.service';
import { LeavedetailsService } from '../leavedetails.service';
import { of } from 'rxjs/observable/of';

const userServiceStub = {
  getLeavePending(empid) {
    console.log('came inside the stub');
    const levs = [
      {
      "leaveEmpId":2000,
      "leaveId":8,
      "leaveType":"ML",
      "leaveStartDate":"2019-03-08",
      "leaveEndDate":"2019-03-09",
      "leaveAppliedOn":"2019-03-06",
      "leaveReason":"gh",
      "leaveNoOfDays":1,
      "leaveStatus":"PENDING",
      "leaveMgrComments":"jyfg"
    },
    {"leaveEmpId":2000,
    "leaveId":31,
    "leaveType":"EL",
    "leaveStartDate":"2019-12-13",
    "leaveEndDate":"2019-12-13",
    "leaveAppliedOn":"2019-03-05",
    "leaveReason":"sedfdgd",
    "leaveNoOfDays":1,
    "leaveStatus":"PENDING",
    "leaveMgrComments":null
  },
    ];
    return of( levs );
  }
};
describe('LeavependingComponent', () => {
  let component: LeavependingComponent;
  let fixture: ComponentFixture<LeavependingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,RouterTestingModule
      ],
      providers: [{provide: LeavedetailsService, 
        useValue: userServiceStub},EmployeeService],
      declarations: [ LeavependingComponent, SortdataPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavependingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`the leaveEmpId leaveDeatils to be 0`, async(()=>{
    const fixture = TestBed.createComponent(LeavependingComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.lpending[0].leaveEmpId).toEqual(2000);
  }));
  it(`the leaveId leaveDeatils to be 0`, async(()=>{
    const fixture = TestBed.createComponent(LeavependingComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.lpending[0].leaveId).toEqual(8);
  }));
  it(`the leaveType leaveDeatils to be Ml`, async(()=>{
    const fixture = TestBed.createComponent(LeavependingComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.lpending[0].leaveType).toEqual("ML");
  }));
  it(`the leaveStartDate leaveDeatils to be Ml`, async(()=>{
    const fixture = TestBed.createComponent(LeavependingComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.lpending[1].leaveStartDate).toEqual("2019-12-13");
  }));
  it(`the leaveEndDate leaveDeatils to be Ml`, async(()=>{
    const fixture = TestBed.createComponent(LeavependingComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.lpending[1].leaveEndDate).toEqual("2019-12-13");
  }));
  it(`the leaveAppliedOn leaveDeatils to be Ml`, async(()=>{
    const fixture = TestBed.createComponent(LeavependingComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.lpending[1].leaveAppliedOn).toEqual("2019-03-05");
  }));
  it(`the leaveReason leaveDeatils to be Ml`, async(()=>{
    const fixture = TestBed.createComponent(LeavependingComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.lpending[1].leaveReason).toEqual("sedfdgd");
  }));
  it(`the leaveNoOfDays leaveDeatils to be Ml`, async(()=>{
    const fixture = TestBed.createComponent(LeavependingComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.lpending[1].leaveNoOfDays).toEqual(1);
  }));
  it(`the leaveStatus leaveDeatils to be Ml`, async(()=>{
    const fixture = TestBed.createComponent(LeavependingComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.lpending[0].leaveStatus).toEqual("PENDING");
  }));
  it(`the leaveMgrComments leaveDeatils to be Ml`, async(()=>{
    const fixture = TestBed.createComponent(LeavependingComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.lpending[0].leaveMgrComments).toEqual("jyfg");
  }));
  
});
