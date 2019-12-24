import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    /**
     * https://app.pluralsight.com/player?course=angular-fundamentals&author=jim-cooper&name=angular-fundamentals-m5&clip=6&mode=live
     */
    constructor(private eventService: EventService, private router: Router) {
        
    }

    canActivate(route:ActivatedRouteSnapshot) {
       const eventExists = !!this.eventService.getEvent(+route.params['id']);

       if (!eventExists) {
           this.router.navigate(['/404']);
       }

       return eventExists;
    }
}