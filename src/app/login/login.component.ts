import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SessionService } from '../session.service';
import { DataService } from "../data.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    errMsg: String;
    username: String;
    password: String;
    hasError: Boolean = false;

    private authenticated: Boolean;

    constructor(
        private apiService: ApiService,
        private dataService: DataService,
        private sessionService: SessionService,
        private router: Router) { }

    ngOnInit() {
        this.authenticated = this.sessionService.getItem('authenticated', false);
        if (this.authenticated) {
            this.router.navigate(['/profile']);
        }
    }

    login(): void {
        this.dataService.sendData({ loading: true });
        this.apiService.auth(this.username, this.password).toPromise().then(user => {
            this.sessionService.setItem('authenticated', true);
            this.sessionService.setItem('user', user);
            // notify to other listener about authentication
            this.dataService.sendData({ authenticated: true });
            this.router.navigate(['/profile']);
        }).catch(err => {
            console.log(err);
            this.dataService.sendData({ loading: false });
            if (err.error) {
                this.errMsg = err.error.message;
                this.hasError = true;
            }
        });
    }

}
