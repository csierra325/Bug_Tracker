import { Component } from '@angular/core';

@Component({
selector: 'app-post-list',
templateUrl: './post-list.component.html',
styleUrls: ['./post-list.component.css']
})



export class PostListComponent{
  // posts=[
    // {title: 'First post', content: 'this is the first post content'},
    // {title: 'second post', content: 'this is the second post content'},
    // {title: 'third post', content: 'this is the third post content'}
  // ]
  posts = [];
}
