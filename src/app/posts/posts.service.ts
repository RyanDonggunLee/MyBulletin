import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post [] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {

  }

  getPost() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postUpdated.next([...this.posts]);
    }
    )
  }

  getPostUpdatedListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post = {id: null, title: title, content: content};
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post)
      .subscribe((resposeData) => {
        console.log(resposeData.message);
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
      });
  }
}
