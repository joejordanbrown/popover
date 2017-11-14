import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageErrorComponent } from './error.component';

describe('PageErrorComponent', () => {
  let component: PageErrorComponent;
  let fixture: ComponentFixture<PageErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
