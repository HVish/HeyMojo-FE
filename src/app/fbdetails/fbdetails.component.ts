import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-fbdetails',
    templateUrl: './fbdetails.component.html',
    styleUrls: ['./fbdetails.component.css']
})
export class FbdetailsComponent implements OnInit {
    @Input() fbData: any;
    albums: Array<any>;

    constructor() { }

    ngOnInit() {
        this.albums = this.fbData.albums.data;
    }

    onAlbumClick(index: number): void {
        $('#viewAlbum .modal-body>.row').html('');
        $('#viewAlbum').modal('show');

        const photos = this.albums[index].photos;

        if (photos) {
            const photocards = photos.data.map(item => `<div class="col-md-3 mb-3">
                <img style="height: 200px; width: 100%; display: block; background: #f9f9f9; object-fit: none; object-position: center;" src="${item.picture}" alt="Card image">
            </div>`);
            $('#viewAlbum .modal-body>.row').html(photocards);
        } else {
            $('#viewAlbum .modal-body>.row').html('<div class="col-md-12">No photos</div>');
        }
    }

}
