'use strict';

import { Organization } from './organization';

export class Name {
    first: String;
    last: String;
};

export class User {
    _id: String;
    username: String;
    firstName: String;
    lastName: String;
    fbToken: String;
    dob: Date;
    work: Organization[];
    education: Organization[];
    hobbies: String[];
    name: Name;
    profilePic: string
}                         