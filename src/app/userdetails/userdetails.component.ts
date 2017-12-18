import { Component, OnInit, Input } from '@angular/core';

import { User } from '../user';
import { Organization } from '../organization';

@Component({
    selector: 'app-userdetails',
    templateUrl: './userdetails.component.html',
    styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
    @Input() user:User;

    constructor() { }

    ngOnInit() {
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
