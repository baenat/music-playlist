import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRecentComponent } from './search-recent.component';

describe('SearchRecentComponent', () => {
  let component: SearchRecentComponent;
  let fixture: ComponentFixture<SearchRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchRecentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
