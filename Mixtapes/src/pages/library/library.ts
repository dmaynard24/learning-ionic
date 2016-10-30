import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'library-page',
    templateUrl: 'library.html'
})
export class LibraryPage {
    constructor(public navController: NavController) {}
}