import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: String;
    password: String;
    authenticated: Boolean = false;

    constructor(private apiService: ApiService) { }

    ngOnInit() {
    }

    login(): void {
        this.apiService.auth(this.username, this.password).toPromise().then(user => {
            this.authenticated = true;
            console.log(user);
        }).catch(err => {
            console.log(err);
        });
    }

}
