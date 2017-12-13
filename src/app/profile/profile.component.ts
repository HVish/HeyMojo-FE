import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

import { User } from '../user';
import { Organization } from '../organization';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user: User;

    constructor(private sessionService: SessionService) { }

    ngOnInit() {
        this.user = this.sessionService.getItem('user', {});
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

}
