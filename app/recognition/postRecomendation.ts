import {Component,OnInit} from '@angular/core';
import {CKEditorModule} from 'ng2-ckeditor';
import { Router } from '@angular/router';
import {Recomendation} from './recomendation.model';
import { RecognitionService} from './service';
 
@Component({
    selector:'postrecomendation',
    templateUrl:'./app/recognition/postRecomendation.html'
})


export class PostRecognition implements OnInit{
   content:any;
   recom:Recomendation;
   recomendations:Array<Recomendation>;

    constructor(private router:Router,private service:RecognitionService){
         this.recom = new Recomendation('','','','<p>Hello <strong>World !</strong></p>')
         this.recomendations = new Array<Recomendation>();
    }

    ngOnInit(){
      
        // this.content = '<p>Hello <strong>World !</strong></p>';
    }

    partialSave(){
        // console.log(this.content);       
         this.service.saveRecomendation(this.recom);
         this.router.navigate(['/reviewrecognition']);
    }
}