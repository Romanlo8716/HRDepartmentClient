import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-description',
  templateUrl: './post-description.component.html',
  styleUrls: ['./post-description.component.css']
})
export class PostDescriptionComponent {
  constructor(private postService:PostService, private route: ActivatedRoute,private title:Title){
    title.setTitle("Должность")
   }

   post:Post
   postId:string|null

   ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');
      
     
    });

    this.postService.getPostById(this.postId).subscribe((responce: Post) => {
     this.post = responce;
    })

   }
}
