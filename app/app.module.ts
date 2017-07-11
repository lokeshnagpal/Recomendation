import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes,Router} from '@angular/router';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/fake-backend';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { MenuComponent } from './menu.component';
import  {LoginComponent} from './login/login.component';
import { MyRecomendation } from './recognition/myRecomendation';
import { PostRecomendation } from './recognition/postRecomendation';


const appRoutes: Routes = [
  { path: '', component: LoginComponent } ,   
  { path: 'myrecomendation', component: MyRecomendation } , 
  { path: 'postrecomendation', component: PostRecomendation }  
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
        
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        LoginComponent,
        MyRecomendation,
        PostRecomendation
        // HomeComponent
    ],
    providers: [
      
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }