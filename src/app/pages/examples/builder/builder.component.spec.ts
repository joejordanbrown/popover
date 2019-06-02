import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExamplesBuilderComponent } from './builder.component';

describe('PageExamplesBuilderComponent', () => {
  let component: PageExamplesBuilderComponent;
  let fixture: ComponentFixture<PageExamplesBuilderComponent>;

  beforeEach(async(() => {
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
