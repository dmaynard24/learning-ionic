import { Injectable } from '@angular/core';

import { User } from '../objects/user';

@Injectable()
export class UserService {
    user: User;
    
    constructor() {
        // User data
        if (!this.user) {
            this.user = new User('0', 'Dave', 'dave_maynard', 'Maynard', 'avatar.jpg', [], []);
            this.user.avatar = '../assets/data/users/' + this.user.username + '/' + this.user.avatar;
        }
    }

    getUser() {
        return this.user;
    }
}