import {Component,OnInit} from '@angular/core';
import {CKEditorModule} from 'ng2-ckeditor';
import { Router } from '@angular/router';
import {Recognition} from './recomendation.model';
import { RecognitionService} from './service';
import {Response} from '@angular/http'; 


@Component({
    selector:'postrecomendation',
    templateUrl:'./app/recognition/postRecomendation.html'
})


export class PostRecognition implements OnInit{
   content:any;
   recog:Recognition;
   recognitions:Array<Recognition>;

    constructor(private router:Router,private service:RecognitionService){
         this.recog = new Recognition('','','','<p>Hello <strong>World !</strong></p>')
         this.recognitions = new Array<Recognition>();
    }

    ngOnInit(){
      
        // this.content = '<p>Hello <strong>World !</strong></p>';
    }

    partialSave(){
        // console.log(this.content);       
         this.service.saveRecomendation(this.recog)
         .subscribe((resp:Response) => {
             this.recog = resp.json();
             this.router.navigate(['/reviewrecognition']);
         });
         
    }
}