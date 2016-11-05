import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { UserService } from '../../services/user.service';
import { User } from '../../objects/user';
import { FollowingPage } from './following/following';

@Component({
    selector: 'library-page',
    templateUrl: 'library.html'
})
export class LibraryPage {
    user: User;
    hasUser: boolean = false;

    constructor(public navController: NavController, private userService: UserService) {
        this.user = this.userService.getUser();
        this.hasUser = true;
    }

    onNavigateToFollowing() {
        this.navController.push(FollowingPage);
    }
}