import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'mixtapes-page',
    templateUrl: 'mixtapes.html'
})
export class MixtapesPage {
    constructor(public navController: NavController) {}
}