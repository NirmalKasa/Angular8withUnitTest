import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public ROOT_URl = 'http://jsonplaceholder.typicode.com';

    constructor(private  http: HttpClient) {
    }

    getPostData() {
        // this.http.get<Post[]>(`${this.ROOT_URl}/posts`).subscribe( posts =>{
        //     console.log(posts)
        // })
        return this.http.get<Post[]>(`${this.ROOT_URl}/posts`);
    }

    getUserData(id: number){
        // this.http.get<Post>(`${this.ROOT_URl}/posts/`+id).subscribe( post => {
        //     console.log(post)
        // })
        return this.http.get<Post>(`${this.ROOT_URl}/posts/`+id);
    }
}