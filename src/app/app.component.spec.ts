import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: ApiService,
          useValue: {
            getEntities: () => of([]),
          },
        },
      ],
    }).compileComponents();
  });

  it('should render entities', () => {
    const fixture = TestBed.createComponent(AppComponent);

    expect(
      fixture.debugElement.nativeElement.querySelectorAll('div:nth-child(2)')
    ).not.toBeNull();
  });
});
