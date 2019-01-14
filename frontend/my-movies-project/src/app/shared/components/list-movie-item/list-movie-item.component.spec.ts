import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieItemComponent } from './list-movie-item.component';

describe('ListMovieItemComponent', () => {
  let component: ListMovieItemComponent;
  let fixture: ComponentFixture<ListMovieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMovieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
