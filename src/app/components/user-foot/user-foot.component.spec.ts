import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFootComponent } from './user-foot.component';

describe('UserFootComponent', () => {
  let component: UserFootComponent;
  let fixture: ComponentFixture<UserFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
