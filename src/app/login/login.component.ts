import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

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
    authenticated: Boolean = false;

    constructor(
        private apiService: ApiService,
        private router: Router) { }

    ngOnInit() {
    }

    login(): void {
        this.apiService.auth(this.username, this.password).toPromise().then(user => {
            this.authenticated = true;
            console.log(user);
            this.router.navigate(['/profile']);
        }).catch(err => {
            console.log(err);
            this.errMsg = err.error.message;
            this.hasError = true;
        });
    }

}
