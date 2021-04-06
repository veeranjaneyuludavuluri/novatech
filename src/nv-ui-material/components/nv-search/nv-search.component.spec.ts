import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvSearchComponent } from './nv-search.component';

describe('NvSearchComponent', () => {
  let component: NvSearchComponent;
  let fixture: ComponentFixture<NvSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
