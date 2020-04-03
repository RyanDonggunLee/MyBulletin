import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post [] = [];

  getPost() {
   return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post = {title: title, content: content};
    this.posts.push(post);
  }
}
