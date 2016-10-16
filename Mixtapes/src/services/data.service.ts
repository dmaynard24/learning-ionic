import { Injectable } from '@angular/core';

import { Mixtape } from '../objects/mixtape';

@Injectable()
export class DataService {
    mixtapes: Mixtape[] = [];
    
    constructor() {
        // let tape0 = new Mixtape('0', '../assets/data/A$AP Rocky/Live.Love.A$AP/front.jpg', 'Live.Love.A$AP', 'A$AP Rocky');
        let tape1 = new Mixtape('1', '../assets/data/Wiz Khalifa/Cabin Fever/front.jpg', 'Cabin Fever', 'Wiz Khalifa');
        let tape2 = new Mixtape('2', '../assets/data/Wiz Khalifa/Kush & OJ/front.jpg', 'Kush & OJ', 'Wiz Khalifa');
        let tape3 = new Mixtape('3', '../assets/data/Wiz Khalifa/Taylor Allderdice/front.jpg', 'Taylor Allderdice', 'Wiz Khalifa');
        // this.mixtapes.push(tape0);
        this.mixtapes.push(tape1);
        this.mixtapes.push(tape2);
        this.mixtapes.push(tape3);
    }

    getMixtapes(): Mixtape[] {
        return this.mixtapes;
    }
}