import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { DataService } from "../data.service";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    authenticated: Boolean;

    constructor(
        private dataService: DataService,
        private sessionService: SessionService,
        private router: Router) { }

    ngOnInit() {
        this.authenticated = this.sessionService.getItem('authenticated', false);
        // subscribe for future session update
        this.dataService.data.subscribe(data => {
            if (data.hasOwnProperty('authenticated')) {
                this.authenticated = data['authenticated'];
            }
        });
    }

    logout(): void {
        this.authenticated = false;
        this.sessionService.setItem('authenticated', false);
        this.sessionService.removeItem('user');
        // notify to other listener about logout
        this.dataService.sendData({ authenticated: false });
        this.router.navigate(['/login']);
    }

}
