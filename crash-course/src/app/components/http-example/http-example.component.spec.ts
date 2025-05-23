import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpExampleComponent } from './http-example.component';

describe('HttpExampleComponent', () => {
  let component: HttpExampleComponent;
  let fixture: ComponentFixture<HttpExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
