import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWatcherComponent } from './course-viewer.component';

describe('VideoWatcherComponent', () => {
  let component: VideoWatcherComponent;
  let fixture: ComponentFixture<VideoWatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoWatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
