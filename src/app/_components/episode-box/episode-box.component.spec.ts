import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeBoxComponent } from './episode-box.component';

describe('EpisodeBoxComponent', () => {
  let component: EpisodeBoxComponent;
  let fixture: ComponentFixture<EpisodeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
