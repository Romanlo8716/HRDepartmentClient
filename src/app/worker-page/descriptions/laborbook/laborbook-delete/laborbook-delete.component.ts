import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LaborBook } from 'src/app/models/LaborBook';
import { WorkerDescriptionService } from 'src/app/service/workerdescription.service';
import { Worker } from 'src/app/models/Worker';

@Component({
  selector: 'app-laborbook-delete',
  templateUrl: './laborbook-delete.component.html',
  styleUrls: ['./laborbook-delete.component.css']
})
export class LaborbookDeleteComponent {
  constructor(private title:Title, private route:ActivatedRoute, private workerDescriptionService:WorkerDescriptionService)
  {
    title.setTitle("Удаление данных трудовой книги")
  }

  laborBook:LaborBook
  laborBookId:string|null

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.laborBookId = params.get('id');
      
     
    });

    this.workerDescriptionService.getLaborBookById(this.laborBookId).subscribe((responce: LaborBook) => {
     this.laborBook = responce;
    })
  }

  onSubmitDelete() {
    // здесь вы можете отправить данные с помощью HTTP-запроса
    this.workerDescriptionService.deleteLaborBook(this.laborBookId, this.laborBook.worker)
   
  }
}
