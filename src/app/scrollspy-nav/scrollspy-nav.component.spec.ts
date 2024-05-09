import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollspyNavComponent } from './scrollspy-nav.component';

describe('ScrollspyNavComponent', () => {
  let component: ScrollspyNavComponent;
  let fixture: ComponentFixture<ScrollspyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollspyNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollspyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
