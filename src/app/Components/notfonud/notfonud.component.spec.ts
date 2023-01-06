import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfonudComponent } from './notfonud.component';

describe('NotfonudComponent', () => {
  let component: NotfonudComponent;
  let fixture: ComponentFixture<NotfonudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfonudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfonudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
