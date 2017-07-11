import {Component} from '@angular/core';

@Component({
    selector:'menu',
    template:`<div id="sidebar-wrapper" class="">
        
            <nav>
                <ul class="sidebar-nav nav">
                    <li class="active"><a routerLink = '/myrecomendation'>My Recomendation</a></li>
                    <li><a routerLink = '/postrecomendation'>Post Recomendation</a></li>                    
                </ul>
            </nav>
        
    </div>`
})

export class MenuComponent{}