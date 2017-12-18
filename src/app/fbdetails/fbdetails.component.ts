import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-fbdetails',
    templateUrl: './fbdetails.component.html',
    styleUrls: ['./fbdetails.component.css']
})
export class FbdetailsComponent implements OnInit {
    @Input() fbData: any;

    constructor() { }

    ngOnInit() {
    }

}
