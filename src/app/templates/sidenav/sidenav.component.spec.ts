import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavComponent ],
      imports: [
        RouterTestingModule.withRoutes([
            {path: 'home', component: HomeCmp}, 
            {path: 'posts', component: PostsCmp},
            {path: 'infinitescroll', component: InfinitescrollCmp}, 
            {path: 'reactiveform', component: ReactiveformCmp}, 
          ]),      
      ]    
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router)
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should navigate to / by default', () => {
    expect(router.location.path()).toBe('');
  });

  it('should navigate to / when click home button', () => {
    const compiled = fixture.nativeElement;
    let span = compiled.querySelector('.side-toolbar span:nth-child(1n) ')
    span.click()
    fixture.detectChanges();
    fixture.whenStable().then(res=>{
      expect(router.location.path()).toBe('/')
    })
  });

  it('should navigate to /posts when click posts button', () => {
    const compiled = fixture.nativeElement;
    let span = compiled.querySelector('.side-toolbar span:nth-child(3n) ')
    span.click()
    fixture.detectChanges();
    fixture.whenStable().then(res=>{
      expect(router.location.path()).toBe('/posts')
    })
  });

  it('should navigate to /infinitescroll when click posts button', () => {
    const compiled = fixture.nativeElement;
    let span = compiled.querySelector('.side-toolbar span:nth-child(4n) ')
    span.click()
    fixture.detectChanges();
    fixture.whenStable().then(res=>{
      expect(router.location.path()).toBe('/infinitescroll')
    })
  });

  it('should have more than 4 routes to navigate', () => {
    const compiled = fixture.nativeElement;
    let spans = compiled.querySelectorAll('.side-toolbar span ')

    expect(spans.length).toBeGreaterThan(4)

  });


});


class HomeCmp{}
class PostsCmp{}
class InfinitescrollCmp{}
class ReactiveformCmp{}