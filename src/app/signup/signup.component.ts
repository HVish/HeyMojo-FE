import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    user: any = {
        name: {
            first: '',
            last: ''
        },
        dob: '',
        username: '',
        password: '',
        confirmPassword: '',
        profilePic: ''
    };

    constructor(
        private apiService: ApiService,
        private router: Router) { }

    ngOnInit() {
    }

    signup(): void {
        this.apiService.signup(this.user).toPromise().then(user => {
            this.router.navigate(['/login']);
        }).catch(console.log);
    }

}
