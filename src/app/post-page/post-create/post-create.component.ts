import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  constructor(private postService:PostService, private title:Title){
    title.setTitle("Добавление должности")
  }

  formData = {
    namePost: '',
    salary: ''
};

onSubmit() {
  console.log('Данные формы: ', this.formData);
  this.postService.createPost(this.formData)
 
}

}
