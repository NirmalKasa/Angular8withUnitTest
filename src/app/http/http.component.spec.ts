import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpComponent } from './http.component';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('HttpComponent', () => {
  let component: HttpComponent;
  let fixture: ComponentFixture<HttpComponent>;
  let httpMock: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
