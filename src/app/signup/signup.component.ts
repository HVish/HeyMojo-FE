import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../data.service";
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
    email: string;
    profilePic: any;

    constructor(
        private dataService: DataService,
        private apiService: ApiService,
        private router: Router) { }

    ngOnInit() {
    }

    fileSelected(e): void {
        this.profilePic = e.target.files[0];
    }

    submit(): void {
        const isNotEmpty = !!this.firstName && !!this.lastName && !!this.dob && !!this.password &&
            !!this.confirmPassword && !!this.username && !!this.email && !!this.profilePic;

        if (!isNotEmpty) {
            alert('All fields are mondatory');
        } else if (this.password != this.confirmPassword) {
            alert('password mismatch');
        } else {
            let filename;
            const data = {
                firstName: this.firstName,
                lastName: this.lastName,
                dob: this.dob,
                password: this.password,
                username: this.username,
                email: this.email,
                profilePic: this.profilePic
            };
            this.dataService.sendData({ loading: true });
            this.apiService.uploadUrl(this.profilePic).toPromise().then(response => {
                data.profilePic = response.name;
                return this.apiService.uploadFile(response.url, this.profilePic).toPromise();
            }).then(response => {
                return this.apiService.signup(data).toPromise();
            }).then(response => {
                this.dataService.sendData({ loading: false });
                this.router.navigate(['/login']);
            }).catch(err => {
                console.log(err);
                this.dataService.sendData({ loading: false });
            });
        }
    }

}
