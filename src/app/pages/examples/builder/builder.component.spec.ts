import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageExamplesBuilderComponent } from './builder.component';

describe('PageExamplesBuilderComponent', () => {
  let component: PageExamplesBuilderComponent;
  let fixture: ComponentFixture<PageExamplesBuilderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExamplesBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExamplesBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
