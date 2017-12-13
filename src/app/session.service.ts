import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class SessionService {
    private data: any = {};

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        @Inject('LOCALSTORAGE') private localStorage: any) {

        if (isPlatformBrowser(this.platformId)) {
            console.log('LocalStorage is available');
            for (const key in window.localStorage) {
                if (window.localStorage.hasOwnProperty(key)) {
                    this.data[key] = JSON.parse(window.localStorage.getItem(key));
                }
            }
        } else {
            console.log('LocalStorage is not available');
        }

    }

    setItem(name: string, value: any): void {
        this.data[name] = value;
        window.localStorage.setItem(name, JSON.stringify(value));
    }

    getItem(name: string, defaultVal: any): any {
        if (this.data.hasOwnProperty(name)) {
            return this.data[name];
        }
        return defaultVal;
    }

    removeItem(name: string): void {
        delete this.data[name];
        window.localStorage.removeItem(name);
    }

}
