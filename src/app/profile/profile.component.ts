import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { FbService } from '../fb.service';
import { ApiMethod } from 'ngx-facebook/dist/esm/providers/facebook';

import { User } from '../user';
import { Organization } from '../organization';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user: User;
    fbLogin: Boolean;
    fbData: any;
    profilePic:string;

    constructor(
        private sessionService: SessionService,
        private fbService: FbService,
        private router: Router) { }

    ngOnInit() {
        if (!this.sessionService.getItem('authenticated', false)) {
            this.router.navigate(['/profile']);
        } else {
            this.user = this.sessionService.getItem('user', {});
            this.fbLogin = this.sessionService.getItem('fbLogin', false);
            if (this.fbLogin) {
                this.getFbProfile().then(response => {
                    console.log('FB logged in', response);
                    this.fbData = response;
                    this.profilePic = response.picture.data.url;
                }).catch(console.log);
            }
        }
    }

    formatDate(date: any): string {
        const d: Date = new Date(date);
        return d.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    formatOrg(org: Organization): string {
        const start = this.formatDate(org.start);
        const end = org.end ? this.formatDate(org.end) : 'present';
        return `${org.name} [ ${start} - ${end} ]`;
    }

    getAccountPermissions(): Promise<any> {
        const method: ApiMethod = 'get';
        const access_token: string = this.sessionService.getItem('accessToken', '');
        return this.fbService.api('/me/accounts', method, {
            fields: this.fbService.fields.join(),
            access_token: access_token
        });
    }

    getFbProfile(): Promise<any> {
        const method: ApiMethod = 'get';
        const access_token: string = this.sessionService.getItem('accessToken', '');
        return this.fbService.api('/me', method, {
            fields: this.fbService.fields.join(),
            access_token: access_token
        });
    }

}
