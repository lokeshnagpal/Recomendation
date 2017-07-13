import { Component } from "@angular/core";
import { Router } from "@angular/router";
 
@Component({
   selector:'revRecom',
   templateUrl:'./app/recognition/recomedationReview.html'
})

export class ReviewRecognition{
    constructor(private router:Router){}
    update(){
      this.router.navigate(['/postrecognition']);
    }
}