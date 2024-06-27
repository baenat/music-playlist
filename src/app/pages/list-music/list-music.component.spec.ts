import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMusicComponent } from './list-music.component';

describe('ListMusicComponent', () => {
  let component: ListMusicComponent;
  let fixture: ComponentFixture<ListMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
