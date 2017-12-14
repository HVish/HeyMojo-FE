import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    firstName: string;
    lastName: string;
    dob: string;
    password: string;
    confirmPassword: string;
    username: string;
    profilePic: any;

    constructor(
        private apiService: ApiService,
        private router: Router) { }

    ngOnInit() {
    }

    fileSelected(e): void {
        this.profilePic = e.target.files[0];
    }

    submit(): void {
        if (this.password != this.confirmPassword) {
            console.log('password mismatch');
        } else {
            let filename;
            const data = {
                firstName: this.firstName,
                lastName: this.lastName,
                dob: this.dob,
                password: this.password,
                username: this.username,
                profilePic: this.profilePic
            };
            this.apiService.uploadUrl(this.profilePic).toPromise().then(response => {
                data.profilePic = response.name;
                return this.apiService.uploadFile(response.url, this.profilePic).toPromise();
            }).then(response => {
                return this.apiService.signup(data).toPromise();
            }).then(response => {
                this.router.navigate(['/login']);
            }).catch(err => {
                console.log(err);
            });
        }
    }

}
