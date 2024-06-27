import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestArtistComponent } from './best-artist.component';

describe('BestArtistComponent', () => {
  let component: BestArtistComponent;
  let fixture: ComponentFixture<BestArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestArtistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
