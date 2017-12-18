import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbdetailsComponent } from './fbdetails.component';

describe('FbdetailsComponent', () => {
  let component: FbdetailsComponent;
  let fixture: ComponentFixture<FbdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
