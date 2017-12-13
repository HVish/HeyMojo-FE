import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { DataService } from "../data.service";
import { FbService } from '../fb.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    authenticated: Boolean;

    constructor(
        private dataService: DataService,
        private fbService: FbService,
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

    fbLogin() {
        this.fbService.login({
            scope: this.fbService.permissions.join()
        }).then(response => {
            console.log('FB logged in');

            this.sessionService.setItem('authenticated', true);
            this.sessionService.setItem('fbLogin', true);
            this.sessionService.setItem('fbAccountId', response.authResponse.userID);
            this.sessionService.setItem('accessToken', response.authResponse.accessToken);

            // notify to other listener about authentication
            this.dataService.sendData({ authenticated: true });
            this.router.navigate(['/profile']);
        }).catch(err => {
            console.log(err);
        });
    }

    logout(): void {
        // check if logged in by fb
        const fb: Boolean = this.sessionService.getItem('fbLogin', false);

        if (fb) {
            this.sessionService.removeItem('fbLogin');
            this.sessionService.removeItem('fbAccountId');
            this.sessionService.removeItem('accessToken');
            this.fbService.logout().catch(console.log);
        } else {
            this.sessionService.removeItem('user');
        }

        this.authenticated = false;
        this.sessionService.setItem('authenticated', false);
        // notify to other listener about logout
        this.dataService.sendData({ authenticated: false });
        this.router.navigate(['/login']);
    }

}
