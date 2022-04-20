import { TestBed } from '@angular/core/testing';
import { MyTasksComponent } from './my-tasks.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyTasksComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MyTasksComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-todo-list'`, () => {
    const fixture = TestBed.createComponent(MyTasksComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-todo-list');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MyTasksComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'my-todo-list app is running!'
    );
  });
});
