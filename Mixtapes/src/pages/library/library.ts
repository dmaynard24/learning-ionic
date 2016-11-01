import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FollowingPage } from './following/following';

@Component({
    selector: 'library-page',
    templateUrl: 'library.html'
})
export class LibraryPage {
    constructor(public navController: NavController) {}

    onNavigateFollowing() {
        this.navController.push(FollowingPage);
    }
}