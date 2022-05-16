import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageExamplesComponent } from './examples.component';

describe('PageExamplesComponent', () => {
  let component: PageExamplesComponent;
  let fixture: ComponentFixture<PageExamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
