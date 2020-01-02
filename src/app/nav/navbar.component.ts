import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';
import { Observable } from 'rxjs';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) #searchForm {display:none}
        li > a.active { color: #F97924; }
    `]
})
export class NavBarcomponent {
    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(public auth:AuthService, private eventService:EventService){

    }

    searchSessions(searchTerm) {
      return this.eventService.searchSessions(searchTerm).subscribe
        (sessions => {
            this.foundSessions = sessions;
            console.log(this.foundSessions);
        });
    }
}