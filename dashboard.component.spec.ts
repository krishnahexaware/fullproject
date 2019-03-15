import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LeavedetailsService } from '../leavedetails.service';
import { EmployeeService } from '../employee.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule,HttpModule,RouterTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers:[LeavedetailsService,EmployeeService],
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
