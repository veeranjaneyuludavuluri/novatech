import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvItemPickerComponent } from './nv-item-picker.component';

describe('NvItemPickerComponent', () => {
  let component: NvItemPickerComponent;
  let fixture: ComponentFixture<NvItemPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvItemPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvItemPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
