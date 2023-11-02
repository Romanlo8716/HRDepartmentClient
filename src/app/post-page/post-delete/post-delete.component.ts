import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent {
  constructor(private postService:PostService, private route: ActivatedRoute,private title:Title){
    title.setTitle("Удаление должности")
  }


  post: Post
  postId:String|null

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');
      
     
    });

    this.postService.getPostById(this.postId).subscribe((responce: Post) => {
     this.post = responce;
    })

   }

   onSubmitDelete() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.postService.deletePost(this.postId)
   
  }
}
