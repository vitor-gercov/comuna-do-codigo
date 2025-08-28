import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulLinksListComponent } from './useful-links-list.component';

describe('UsefulLinksListComponent', () => {
  let component: UsefulLinksListComponent;
  let fixture: ComponentFixture<UsefulLinksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsefulLinksListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsefulLinksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
