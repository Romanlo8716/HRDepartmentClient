import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent {
  constructor(private postService:PostService, private route: ActivatedRoute,private title:Title){
    title.setTitle("Изменение должности")
   }

   post: Post
  postId:String|null

  formData = {
    id: '',
    namePost: '',
    salary: ''
};



  ngOnInit(): void{


    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');
      
     
    });

    this.postService.getPostById(this.postId).subscribe((responce: Post) => {
     this.post = responce;
     this.formData.namePost = this.post.namePost
     this.formData.salary = this.post.salary

    })

   }

   onSubmitUpdate() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.postService.updatePost(this.postId,this.formData)
   
  }
}
