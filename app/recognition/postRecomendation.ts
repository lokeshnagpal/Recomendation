import {Component,OnInit} from '@angular/core';
import {CKEditorModule} from 'ng2-ckeditor';
import { Router } from '@angular/router';

@Component({
    selector:'postrecomendation',
    templateUrl:'./app/recognition/postRecomendation.html'
})


export class PostRecomendation implements OnInit{
   content:any;
    constructor(private router:Router){}

    ngOnInit(){
      
        this.content = '<p>Hello <strong>World !</strong></p>';
    }

    save(){
        console.log(this.content);
        // this.router.navigateByUrl("/reviewrecomendation");
         this.router.navigate(['/reviewrecomendation']);
    }
}