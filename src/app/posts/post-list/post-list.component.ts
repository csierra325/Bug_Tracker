import { Component, OnInit, OnDestroy} from '@angular/core';

import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
selector: 'app-post-list',
templateUrl: './post-list.component.html',
styleUrls: ['./post-list.component.css']
})



export class PostListComponent implements OnInit, OnDestroy{
  // posts=[
    // {title: 'First post', content: 'this is the first post content'},
    // {title: 'second post', content: 'this is the second post content'},
    // {title: 'third post', content: 'this is the third post content'}
  // ]
  posts: Post[] = [];

  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.postsService.getPostUpdateListener()
    this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

ngOnDestroy(){
  this.postsSub.unsubscribe();
}
}
