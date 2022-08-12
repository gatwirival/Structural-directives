import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlusstrationsComponent } from './ilusstrations.component';

describe('IlusstrationsComponent', () => {
  let component: IlusstrationsComponent;
  let fixture: ComponentFixture<IlusstrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlusstrationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlusstrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
