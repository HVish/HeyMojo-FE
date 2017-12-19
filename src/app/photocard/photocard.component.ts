import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-photocard',
    templateUrl: './photocard.component.html',
    styleUrls: ['./photocard.component.css']
})
export class PhotocardComponent implements OnInit {
    @Input() link: Boolean;
    @Input() cardHeader: String;
    @Input() cardTitle: String;
    @Input() cardSubTitle: String;
    @Input() imageUrl: String;

    constructor() { }

    ngOnInit() { }

}
