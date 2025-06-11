import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeProviderComponent } from './code-provider.component';

describe('CodeProviderComponent', () => {
  let component: CodeProviderComponent;
  let fixture: ComponentFixture<CodeProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeProviderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
