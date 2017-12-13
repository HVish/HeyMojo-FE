import { Injectable } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { ApiMethod } from 'ngx-facebook/dist/esm/providers/facebook';
import { LoginOptions } from 'ngx-facebook/dist/esm/models/login-options';

@Injectable()
export class FbService {
    public readonly permissions: string[] = [
        'user_about_me',
        'user_birthday',
        'user_education_history',
        'user_friends',
        'user_likes',
        'user_photos',
        'user_relationships',
        'user_work_history',
    ];

    public readonly fields: string[] = [
        'id',
        'name',
        'gender',
        'about',
        'birthday',
        'friends',
        'relationship_status',
        'education',
        'work',
        'albums{cover_photo,name,count,description}',
        'likes',
        'picture.type(large)'
    ];

    constructor(private fb: FacebookService) {
        const initParams: InitParams = {
            appId: '152913075339705',
            xfbml: true,
            version: 'v2.11'
        };

        fb.init(initParams);
    }

    login(options: LoginOptions): Promise<LoginResponse> {
        return this.fb.login(options);
    }

    logout(): Promise<any> {
        return this.fb.logout();
    }

    api(url: string, method: ApiMethod, params: any = null): Promise<any> {
        return this.fb.api(url, method, params);
    }

}
