import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import {CKEditorModule} from 'ng2-ckeditor';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/fake-backend';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { MenuComponent } from './menu.component';
import  {LoginComponent} from './login/login.component';
import { MyRecognition } from './recognition/myRecomendation';
import { PostRecognition } from './recognition/postRecomendation';
import { ReviewRecognition} from './recognition/recomendationReview.component';
import { RecognitionByMe} from './recognition/recognitionByMe.component';
import {RecognitionService} from './recognition/service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent } ,   
  { path: 'myrecognition', component: MyRecognition } , 
  { path: 'postrecognition', component: PostRecognition },
  { path: "reviewrecognition", component: ReviewRecognition },
  { path: "recognitionbyme", component: RecognitionByMe }      
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        CKEditorModule
                
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        LoginComponent,
        MyRecognition,
        PostRecognition,
        ReviewRecognition,
        RecognitionByMe
    ],
    providers: [
      RecognitionService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }