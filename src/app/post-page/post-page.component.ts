import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Post} from '../models/Post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  constructor(private postService: PostService, private titleService: Title) {
    this.titleService.setTitle('Должности компании');
   }



posts: Post[];

ngOnInit(): void{
 this.postService.getPost().subscribe((responce: Post[]) => {
  this.posts = responce;
 })

}
}