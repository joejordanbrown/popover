import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExamplesFormComponent } from './form.component';

describe('PageExamplesFormComponent', () => {
  let component: PageExamplesFormComponent;
  let fixture: ComponentFixture<PageExamplesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExamplesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExamplesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
