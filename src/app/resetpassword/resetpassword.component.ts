import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from "../data.service";
import { ApiService } from '../api.service';

@Component({
    selector: 'app-resetpassword',
    templateUrl: './resetpassword.component.html',
    styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
    token: string;
    username: string;
    password: string;
    confirmPassword: string;

    errMsg: string;
    mailSent: Boolean;
    passwordReset: Boolean;
    usernameError: Boolean;
    passwordError: Boolean;

    constructor(
        private dataService: DataService,
        private apiService: ApiService,
        private route: ActivatedRoute) {

        this.route.params.subscribe(params => {
            if (params['token']) {
                this.token = params['token'];
                this.username = params['username'];
            }
        });
    }

    ngOnInit() {
        if (this.token) {
            this.dataService.sendData({ loading: true });
            this.apiService.verifyResetPasswordToken(this.username, this.token).toPromise().then(response => {
                this.username = response.username;
                this.dataService.sendData({ loading: false });
            }).catch(err => {
                console.log(err);
                this.token = null;
                this.usernameError = true;
                this.errMsg = err.error.message || "Unable to verify username";
                this.dataService.sendData({ loading: false });
            });
        }
    }

    submit(): void {
        this.dataService.sendData({ loading: true });
        if (!this.token) {
            this.apiService.genResetPasswordLink(this.username).toPromise().then(response => {
                this.mailSent = true;
                this.removeError();
                this.dataService.sendData({ loading: false });
            }).catch(err => {
                this.usernameError = true;
                this.errMsg = err.error.message || "Unable to verify username";
                this.dataService.sendData({ loading: false });
            });
        } else {
            // validate
            if (this.password && this.password == this.confirmPassword) {
                this.apiService.resetPassword(
                    this.username,
                    this.token,
                    this.password
                ).toPromise().then(response => {
                    this.removeError();
                    this.passwordReset = true;
                    this.dataService.sendData({ loading: false });
                }).catch(err => {
                    console.log(err);
                    this.passwordError = true;
                    this.errMsg = err.error.message || "Unable to reset password";
                    this.dataService.sendData({ loading: false });
                });
            } else {
                this.passwordError = true;
                this.errMsg = 'Password does not match';
                this.dataService.sendData({ loading: false });
            }
        }
    }

    removeError() {
        this.errMsg = '';
        this.usernameError = false;
        this.passwordError = false;
    }

}
