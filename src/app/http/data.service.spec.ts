import { TestBed} from '@angular/core/testing';
import {HttpTestingController,HttpClientTestingModule} from '@angular/common/http/testing';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { Post } from './post.model';

describe('DataService', () => {
    let service: DataService;
    let httpMock: HttpTestingController;
  beforeEach(() => 
    {
        TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DataService]
  });
         service = TestBed.get(DataService);
         httpMock = TestBed.get(HttpTestingController);
});

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('be able to retrieve posts from the API bia GET', ()=>{
    const dummyPosts: Post[] = [{
        userId: '1',
        id: 1,
        body: 'Http Client',
        title: 'Testing Angular Service'
        }, {
        userId: '2',
        id: 2,
        body: 'Hello World2',
        title: 'Testing Angular Services'
    }];

    service.getPostData().subscribe( posts => {
        expect(posts.length).toBe(2);
        expect(posts).toEqual(dummyPosts)
    });

    const request = httpMock.expectOne(`${service.ROOT_URl}/posts`)
    expect(request.request.method).toBe('GET');
    request.flush(dummyPosts);
    httpMock.verify();
  })

  it('should return user data with id 1',()=> {
      const id=1
    const dummyPost: Post = {
        userId: '1',
        id: 1,
        body: 'Http Client',
        title: 'Testing Angular Service'
        };

        service.getUserData(id).subscribe( post => {
                    expect(post).toEqual(dummyPost)
        })

        const request = httpMock.expectOne(`${service.ROOT_URl}/posts/`+id)
        expect(request.request.method).toBe('GET');
        request.flush(dummyPost);
        httpMock.verify();
  })

  
});