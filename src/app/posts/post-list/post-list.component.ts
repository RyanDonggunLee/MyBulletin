import { Component, Input } from '@angular/core';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector : 'app-post-list',
  templateUrl : './post-list.component.html',
  styleUrls : ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts: Post[] = [];

  PostsService: PostsService;

  constructor(PostsService: PostsService) {
    this.PostsService = PostsService;
  }
}
