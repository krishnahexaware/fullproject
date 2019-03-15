import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyleaveComponent } from './applyleave.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from '../employee.service';
import { LeavedetailsService } from '../leavedetails.service';

describe('ApplyleaveComponent', () => {
  let component: ApplyleaveComponent;
  let fixture: ComponentFixture<ApplyleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyleaveComponent ],
      imports : [FormsModule,HttpModule,RouterTestingModule],
      providers:[LeavedetailsService,EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
