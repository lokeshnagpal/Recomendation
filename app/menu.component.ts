import {Component} from '@angular/core';

@Component({
    selector:'menu',
    template:`<div id="sidebar-wrapper" class="">        
            <nav>
                <ul class="sidebar-nav nav">
                    <li class="active"><a routerLink = '/myrecomendation'><i class="fa fa-bar-chart-o" style="font-size:24px"></i><span>My Recomendation</span></a></li>
                    <li><a routerLink = '/postrecomendation'><i class="fa fa-newspaper-o" style="font-size:24px"></i>Post Recomendation</a></li>                    
                </ul>
            </nav>
        
    </div>`
})

export class MenuComponent{}