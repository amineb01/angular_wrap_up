import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postService: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      // providers:[
      //   postService,
      // ]

    });
    postService = TestBed.inject(PostsService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(postService).toBeTruthy();
  });
});

