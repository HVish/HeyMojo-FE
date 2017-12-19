import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotocardComponent } from './photocard.component';

describe('PhotocardComponent', () => {
  let component: PhotocardComponent;
  let fixture: ComponentFixture<PhotocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
