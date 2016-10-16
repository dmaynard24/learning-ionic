import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'artists-page',
    templateUrl: 'artists.html'
})
export class ArtistsPage {
    constructor(public navController: NavController) {}
}