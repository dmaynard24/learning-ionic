import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Mixtape } from '../../../objects/mixtape';

@Component({
    selector: 'mixtape-page',
    templateUrl: 'mixtape.html'
})
export class MixtapePage {
    mixtape: Mixtape;

    constructor(public navController: NavController, private navParams: NavParams) {
        this.mixtape = navParams.get('mixtape');
    }
}