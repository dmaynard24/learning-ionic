import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DataService } from '../../services/data.service';
import { Mixtape } from '../../objects/mixtape';
import { MixtapePage } from './mixtape/mixtape';

@Component({
    selector: 'mixtapes-page',
    templateUrl: 'mixtapes.html'
})
export class MixtapesPage {
    mixtapes: Mixtape[];
    hasMixtapes: boolean = false;

    constructor(public navController: NavController, private dataService: DataService) {}

    ngOnInit() {
        this.mixtapes = this.dataService.getMixtapes();
        this.hasMixtapes = true;
    }

    onNavigateToMixtape(_mixtape: Mixtape) {
        this.navController.push(MixtapePage, {
            mixtape: _mixtape
        });
    }
}