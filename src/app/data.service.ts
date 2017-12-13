import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

    private dataSource = new BehaviorSubject({});
    data = this.dataSource.asObservable();

    constructor() { }

    sendData(data: Object) {
        this.dataSource.next(data);
    }

}