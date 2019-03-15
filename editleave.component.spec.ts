import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditleaveComponent } from './editleave.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { HttpModule } from '@angular/http';
import { LeavedetailsService } from '../leavedetails.service';


describe('EditleaveComponent', () => {
  let component: EditleaveComponent;
  let fixture: ComponentFixture<EditleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(async(() => { 
    localStorage.setItem("empId","1000");
    TestBed.configureTestingModule({ 
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports : [HttpModule, RouterTestingModule],
      declarations: [ EditleaveComponent ], 
      providers: [LeavedetailsService]
      // providers : [LeavedetailsService,EmployeeService]
    })
    .compileComponents();
  }))

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
