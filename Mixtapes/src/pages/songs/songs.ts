import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'songs-page',
    templateUrl: 'songs.html'
})
export class SongsPage {
    constructor(public navController: NavController) {}
}