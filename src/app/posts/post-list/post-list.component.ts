import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector : 'app-post-list',
  templateUrl : './post-list.component.html',
  styleUrls : ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  PostsService: PostsService;
  private postSub: Subscription;

  constructor(PostsService: PostsService) {
    this.PostsService = PostsService;
  }

  ngOnInit() {
    this.posts = this.PostsService.getPost();
    this.postSub = this.PostsService.getPostUpdatedListener()
      .subscribe((posts: Post[]) => {this.posts = posts});
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
