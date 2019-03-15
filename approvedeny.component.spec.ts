import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedenyComponent } from './approvedeny.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LeavedetailsService } from '../leavedetails.service';
import { EmployeeService } from '../employee.service';

describe('ApprovedenyComponent', () => {
  let component: ApprovedenyComponent;
  let fixture: ComponentFixture<ApprovedenyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule,HttpModule,RouterTestingModule],
      declarations: [ ApprovedenyComponent ],
      providers:[LeavedetailsService,EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });




  
});
