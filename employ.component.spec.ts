import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/observable/of';
import { EmployComponent } from './employ.component';
import { HttpModule } from '@angular/http';
import { FilterdataPipe } from '../filterdata.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from '../employee.service';
const userServiceStub = {
  getEmployees() {
    console.log('came inside the stub');
    const emps = [
      {
        "empId":1000,
        "empFullName":"dhivya",
        "empEmail":"dhivyaBhexaware@gmail.com",
        "empMobile":"9566773044",
        "empDateOfJoining":"2019-12-20",
        "empMgrId":0,
        "empAvailabeLeave":15,
        "empDepartment":"Innovation"
      },
      {
        "empId":2000,
        "empFullName":"darsh",
        "empEmail":"darshhexaware@gmail.com",
        "empMobile":"9566773044",
        "empDateOfJoining":"2019-12-20",
        "empMgrId":1,
        "empAvailabeLeave":14,
        "empDepartment":"Innovation"
      }
    ];
    return of( emps );
  }
};
describe('EmployeeComponent', () => {
  let component: EmployComponent;
  let fixture: ComponentFixture<EmployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [
        FormsModule,HttpModule,RouterTestingModule,HttpClientTestingModule
      ],
      declarations: [ EmployComponent,FilterdataPipe ], 
      // providers: [empservice]
      providers: [{provide: EmployeeService, 
        useValue: userServiceStub}]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(EmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`the name employee Id to be '1000'`, async(()=>{
    const fixture = TestBed.createComponent(EmployComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].empId).toEqual(1000);
  }));

  it(`the name employee to be 'dhivya'`, async(()=>{
    const fixture = TestBed.createComponent(EmployComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].empFullName).toEqual('dhivya');
  }));

  it(`the Email employee to be 'dhivyaBhexaware@gmail.com'`, async(()=>{
    const fixture = TestBed.createComponent(EmployComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].empEmail).toEqual('dhivyaBhexaware@gmail.com');
  }));

  it(`the MobileNo employee to be '9566773044'`, async(()=>{
    const fixture = TestBed.createComponent(EmployComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].empMobile).toEqual('9566773044');
  }));

  it(`the DateOfJoining employee to be '2019-12-20'`, async(()=>{
    const fixture = TestBed.createComponent(EmployComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].empDateOfJoining).toEqual('2019-12-20');
  }));

  it(`the Department employee to be 'Innovation'`, async(()=>{
    const fixture = TestBed.createComponent(EmployComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].empDepartment).toEqual('Innovation');
  }));

  it(`the ManagerId employee to be '0'`, async(()=>{
    const fixture = TestBed.createComponent(EmployComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].empMgrId).toEqual(0);
  }));

  
  it(`the Available Leave Bal employee to be '15'`, async(()=>{
    const fixture = TestBed.createComponent(EmployComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    expect(app.emps[0].empAvailabeLeave).toEqual(15);
  }));

  
  // it('should render one employee record', async(() => {
  //   const fixture = TestBed.createComponent(EmployComponent);
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     fixture.detectChanges();
  //     const compiled = fixture.debugElement.nativeElement;
  //     expect(compiled.querySelectorAll('.emps tr').length).toBe(2);
  //   });
  // }));
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

