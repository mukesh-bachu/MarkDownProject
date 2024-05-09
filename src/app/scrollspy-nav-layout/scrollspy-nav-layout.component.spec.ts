import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollspyNavLayoutComponent } from './scrollspy-nav-layout.component';

describe('ScrollspyNavLayoutComponent', () => {
  let component: ScrollspyNavLayoutComponent;
  let fixture: ComponentFixture<ScrollspyNavLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollspyNavLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollspyNavLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
