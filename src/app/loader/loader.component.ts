import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

    loading:Boolean = false;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        // subscribe for future session update
        this.dataService.data.subscribe(data => {
            if (data.hasOwnProperty('loading')) {
                this.loading = data['loading'];
            }
        });
    }

}
