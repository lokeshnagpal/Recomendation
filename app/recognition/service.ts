import {Component , Injectable} from "@angular/core";
import {Recognition} from './recomendation.model';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RecognitionService {
    private saveRecognitionUrl ="http://172.22.204.139:8080/recognitionSystem/rest/saverecognition";

    constructor(private http:Http) {

     }
     
     saveRecomendation(recog:Recognition):Observable<Response>{
        let header = new Headers({'Content-Type': 'application/json'});
        //3b: Define Request Options for passing header in request
        let options = new RequestOptions({headers:header});
        //3c: Make a post call
        return  this.http.post(
            this.saveRecognitionUrl,
            JSON.stringify(recog),
            options
        );
     }
}