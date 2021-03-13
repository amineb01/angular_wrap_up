import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Observable, of, Subscriber } from 'rxjs';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { Image } from 'src/app/models/image';
import { ImagesService } from 'src/app/services/images.service';

import { ImagesComponent } from './images.component';

describe('ImagesComponent', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, InfiniteScrollModule, AngularMaterialModule ],
      providers: [{provide: ImagesService, useClass: ImagessServiceStub}],
      declarations: [ ImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
    component.pageSize = 5 ;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('test imagesList', () => {

    it('should contain less than or equal pageSize element', () => {
      expect( component.imagesList.length ).toEqual(component.pageSize);
    });

    it('first image title should contain test ', () => {
      expect( component.imagesList[0].title ).toContain('test');
    });


    it('should contain less than or equal 2*pageSize element after scroll', () => {
      component.onScrollDown();
      expect( component.imagesList.length ).toEqual(2 * component.pageSize);

    });
  });
});

class ImagessServiceStub{
  getImages(pageNumber = 0, pageSize = 5 ): Observable<Image[]>{

    const allImages = [
      {
      albumId: 1,
      id: 2,
      title: 'test reprehenderit est deserunt velit ipsam',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796'
      },
      {
      albumId: 1,
      id: 3,
      title: 'officia porro iure quia iusto qui ipsa ut modi',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355'
      },
      {
      albumId: 1,
      id: 4,
      title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
      url: 'https://via.placeholder.com/600/d32776',
      thumbnailUrl: 'https://via.placeholder.com/150/d32776'
      },
      {
      albumId: 1,
      id: 5,
      title: 'natus nisi omnis corporis facere molestiae rerum in',
      url: 'https://via.placeholder.com/600/f66b97',
      thumbnailUrl: 'https://via.placeholder.com/150/f66b97'
      },
      {
      albumId: 1,
      id: 6,
      title: 'accusamus ea aliquid et amet sequi nemo',
      url: 'https://via.placeholder.com/600/56a8c2',
      thumbnailUrl: 'https://via.placeholder.com/150/56a8c2'
      },
      {
      albumId: 1,
      id: 7,
      title: 'officia delectus consequatur vero aut veniam explicabo molestias',
      url: 'https://via.placeholder.com/600/b0f7cc',
      thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc'
      },
      {
      albumId: 1,
      id: 8,
      title: 'aut porro officiis laborum odit ea laudantium corporis',
      url: 'https://via.placeholder.com/600/54176f',
      thumbnailUrl: 'https://via.placeholder.com/150/54176f'
      },
      {
      albumId: 1,
      id: 9,
      title: 'qui eius qui autem sed',
      url: 'https://via.placeholder.com/600/51aa97',
      thumbnailUrl: 'https://via.placeholder.com/150/51aa97'
      },
      {
      albumId: 1,
      id: 10,
      title: 'beatae et provident et ut vel',
      url: 'https://via.placeholder.com/600/810b14',
      thumbnailUrl: 'https://via.placeholder.com/150/810b14'
      },
      {
      albumId: 1,
      id: 11,
      title: 'nihil at amet non hic quia qui',
      url: 'https://via.placeholder.com/600/1ee8a4',
      thumbnailUrl: 'https://via.placeholder.com/150/1ee8a4'
      }
      ];
    const filtredImages = allImages.slice(pageNumber, pageSize + pageNumber);

    return of( filtredImages );


  }
}
