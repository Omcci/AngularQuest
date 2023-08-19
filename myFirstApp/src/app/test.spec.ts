import { TestBed, waitForAsync } from '@angular/core/testing';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailService } from './cocktail.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Quest Test Suite', () => {
  beforeEach(waitForAsync(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000; // sets timeout to 10 seconds

    TestBed.configureTestingModule({
      declarations: [CocktailListComponent],
      imports: [HttpClientTestingModule],  // Add this line

    }).compileComponents();
  }));

  fit('service should be created', () => {
    const service: CocktailService = TestBed.inject(CocktailService);
    expect(service).toBeTruthy();
  });

  fit('service should have a "getCocktails" method which returns at least one object', (done) => {
    const service: CocktailService = TestBed.inject(CocktailService);
    
    service.getCocktails().subscribe(tab => {
      expect(tab.length).toBeGreaterThan(0);
      done();
    });
  });

  fit('should create a CocktailListComponent instance', waitForAsync(() => {
    const fixture = TestBed.createComponent(CocktailListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  fit('component should have a public property named "cocktails"', waitForAsync(() => {
    const fixture = TestBed.createComponent(CocktailListComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.cocktails).toBeTruthy();
  }));

  fit('component should display at least one cocktail', waitForAsync(() => {
    const fixture = TestBed.createComponent(CocktailListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const content = compiled.textContent;
    const first = fixture.componentInstance.cocktails[0];
    expect(content).toContain(first.name);
  }));
});
