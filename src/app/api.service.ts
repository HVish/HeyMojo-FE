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

    uploadUrl(file: any): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/s3/upload-url`, {
            params: {
                name: file.name,
                size: file.size,
                type: file.type
            }
        });
    }

    uploadFile(url: string, file: any): Observable<any> {
        return this.http.put<any>(url, file, {
            headers: {
                'Content-Type': file.type
            }
        });
    }

    getImageUrl(fileName: string): Observable<string> {
        return this.http.get<string>(`${this.baseUrl}/s3/image-url`, {
            params: { name: fileName }
        });
    }

    signup(data: any): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/users`, data);
    }

    genResetPasswordLink(username: string): Observable<any> {
        return this.http.post(`${this.baseUrl}/users/${username}/reset`, null);
    }

    verifyResetPasswordToken(username: string, token: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/users/${username}/reset`, { params: { token } });
    }

    resetPassword(username: string, resetToken: string, password: string): Observable<any> {
        return this.http.put(`${this.baseUrl}/users/${username}/reset`, { resetToken, password });
    }

}
