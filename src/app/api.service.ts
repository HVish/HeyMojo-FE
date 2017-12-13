import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from './user';

@Injectable()
export class ApiService {
    baseUrl: String = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    auth(username: String, password: String): Observable<User> {
        const body = { username, password };
        return this.http.post<User>(`${this.baseUrl}/auth`, body);
    }

}
