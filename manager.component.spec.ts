import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerComponent } from './manager.component';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { of } from 'rxjs/observable/of';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilterdataPipe } from '../filterdata.pipe';


const userServiceStub = {
  searchEmployee(empId) {
    console.log('came inside the stub');
    const mang = [
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
    return of( mang );
  }
};

describe('ManagerComponent', () => {
  let component: ManagerComponent;
  let fixture: ComponentFixture<ManagerComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,HttpModule
      ],
      declarations: [ ManagerComponent ], 
      providers: [{provide: EmployeeService, 
        useValue: userServiceStub}]
    })
    .compileComponents();
  }));


  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
  // it(`the empId Manager to be 0`, async(()=>{
  //   const fixture = TestBed.createComponent(ManagerComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   app.ngOnInit();
  //   expect(app.lpending[0].leaveEmpId).toEqual(2000);
  // }));
  describe('ManagerComponent', () => {
    let component:ManagerComponent;
    let fixture: ComponentFixture<ManagerComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({ 
        imports: [
          FormsModule,HttpModule,RouterTestingModule,HttpClientTestingModule
        ],
        declarations: [ ManagerComponent,FilterdataPipe ], 
        // providers: [empservice]
        providers: [{provide: EmployeeService, 
          useValue: userServiceStub}]
      })
      .compileComponents();
    }));
  
  
    beforeEach(() => {
      fixture = TestBed.createComponent(ManagerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it(`the manager Id to be '3000'`, async(()=>{
      const fixture = TestBed.createComponent(ManagerComponent);
      const app = fixture.debugElement.componentInstance;
      app.ngOnInit();
      expect(app.mang[0].empId).toEqual(3000);
    }));
    it(`the manager name to be 'Krish'`, async(()=>{
      const fixture = TestBed.createComponent(ManagerComponent);
      const app = fixture.debugElement.componentInstance;
      app.ngOnInit();
      expect(app.mang[0].empFullName).toEqual("Krish");
    }));
    it(`the manager empEmail to be 'Krish@HEXAWARE.COM'`, async(()=>{
      const fixture = TestBed.createComponent(ManagerComponent);
      const app = fixture.debugElement.componentInstance;
      app.ngOnInit();
      expect(app.mang[0].empEmail).toEqual("Krish@HEXAWARE.COM");
    }));
    it(`the name manager empMobileNo to be '1234567890'`, async(()=>{
      const fixture = TestBed.createComponent(ManagerComponent);
      const app = fixture.debugElement.componentInstance;
      app.ngOnInit();
      expect(app.mang[0].empMobileNo).toEqual("1234567890");
    }));
    it(`the name manager empDateOfJoining to be '2018-12-20'`, async(()=>{
      const fixture = TestBed.createComponent(ManagerComponent);
      const app = fixture.debugElement.componentInstance;
      app.ngOnInit();
      expect(app.mang[0].empDateOfJoining).toEqual("2018-12-20");
    }));
    it(`the name manager empDepartment to be INNOVATION`, async(()=>{
      const fixture = TestBed.createComponent(ManagerComponent);
      const app = fixture.debugElement.componentInstance;
      app.ngOnInit();
      expect(app.mang[0].empDepartment).toEqual("INNOVATION");
    }));
     it(`the name manager empMgrId to be 0`, async(()=>{
      const fixture = TestBed.createComponent(ManagerComponent);
      const app = fixture.debugElement.componentInstance;
      app.ngOnInit();
      expect(app.mang[0].empMgrId).toEqual(0);
    }));
    it(`the name manager empMgrId to be 0`, async(()=>{
     const fixture = TestBed.createComponent(ManagerComponent);
     const app = fixture.debugElement.componentInstance;
     app.ngOnInit();
     expect(app.mang[0].empMgrId).not.toEqual(1);
   }));
    it(`the name manager empAvailLeavBal to be 26`, async(()=>{
        const fixture = TestBed.createComponent(ManagerComponent);
        const app = fixture.debugElement.componentInstance;
        app.ngOnInit();
        expect(app.mang[0].empAvailLeavBal).toEqual(26);
      }));

      it(`the name manager empAvailLeavBal to be 26`, async(()=>{
        const fixture = TestBed.createComponent(ManagerComponent);
        const app = fixture.debugElement.componentInstance;
        app.ngOnInit();
        expect(app.mang[0].empAvailLeavBal).not.toEqual(6);
      }));
      xit('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(ManagerComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('MANAGER DETAILS');
      }));
});
});
