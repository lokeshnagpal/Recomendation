import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector:'menu',
    template:`<div id="sidebar-wrapper" class="">        
            <nav>
                <ul class="sidebar-nav nav">
                    <li class="active"><a routerLink = '/myrecognition'><i class="fa fa-bar-chart-o" style="font-size:24px"></i><span>My Recognition</span></a></li>
                    <li><a routerLink = '/postrecognition'><i class="fa fa-newspaper-o" style="font-size:24px"></i>Post Recognition</a></li> 
                    <li><a routerLink = '/recognitionbyme'><i class="fa fa-newspaper-o" style="font-size:24px"></i>Recognition By Me</a></li>                                    
                </ul>
            </nav>
        
    </div>`
})

export class MenuComponent{
    
}