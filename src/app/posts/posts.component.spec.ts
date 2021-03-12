import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsService } from '../services/posts.service';

import { PostsComponent } from './posts.component';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { Observable, Subscriber } from 'rxjs';
import { Post } from '../models/post';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [   CommonModule,AngularMaterialModule, BrowserAnimationsModule],
      declarations: [ PostsComponent ],
      providers:[{provide: PostsService, useClass:PostsServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should render h1 tag', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular material');
  });

});


class PostsServiceStub{

  getPosts(): Observable<Post[]>{
    return new Observable((observer: Subscriber<any>) => {
      observer.next([]);
      observer.complete();
  });
  }
}