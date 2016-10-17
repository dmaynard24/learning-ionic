import { Injectable } from '@angular/core';

import { Mixtape } from '../objects/mixtape';
import { Song } from '../objects/song';

@Injectable()
export class DataService {
    mixtapes: Mixtape[] = [];
    songs: Song[] = [];
    
    constructor() {
        // let tape0 = new Mixtape('0', '../assets/data/A$AP Rocky/Live.Love.A$AP/front.jpg', 'Live.Love.A$AP', 'A$AP Rocky');
        let tape1 = new Mixtape('1', '../assets/data/Wiz Khalifa/Cabin Fever/front.jpg', 'Cabin Fever', 'Wiz Khalifa');
        let tape2 = new Mixtape('2', '../assets/data/Wiz Khalifa/Kush & OJ/front.jpg', 'Kush & OJ', 'Wiz Khalifa');
        let tape3 = new Mixtape('3', '../assets/data/Wiz Khalifa/Taylor Allderdice/front.jpg', 'Taylor Allderdice', 'Wiz Khalifa');
        // this.mixtapes.push(tape0);
        this.mixtapes.push(tape1);
        this.mixtapes.push(tape2);
        this.mixtapes.push(tape3);

        let song0 = new Song('0', 'Phone Numbers (feat. Trae Tha Truth & Big Sean)', 'Wiz Khalifa',
                             '01 - Phone Numbers (feat. Trae Tha Truth & Big Sean).mp3', null, '1');
        let song1 = new Song('1', 'Cabin Fever', 'Wiz Khalifa',
                             '02 - Cabin Fever.mp3', null, '1');
        let song2 = new Song('2', 'GangBang (feat. Big Sean)', 'Wiz Khalifa',
                             '03 - GangBang (feat. Big Sean).mp3', null, '1');
        let song3 = new Song('3', 'Errday (feat. Juicy J)', 'Wiz Khalifa',
                             '04 - Errday (feat. Juicy J).mp3', null, '1');
        let song4 = new Song('4', 'Taylor Gang (feat. Chevy Woods)', 'Wiz Khalifa',
                             '05 - Taylor Gang (feat. Chevy Woods).mp3', null, '1');
        let song5 = new Song('5', 'Hustlin', 'Wiz Khalifa',
                             '06 - Hustlin.mp3', null, '1');
        let song6 = new Song('6', 'Middle of You (feat. Chevy Woods, Nikkiya & MDMA)', 'Wiz Khalifa',
                             '07 - Middle of You (feat. Chevy Woods, Nikkiya & MDMA).mp3', null, '1');
        let song7 = new Song('7', 'WTF', 'Wiz Khalifa',
                             '08 - WTF.mp3', null, '1');
        let song8 = new Song('8', 'Homicide (feat. Chevy Woods)', 'Wiz Khalifa',
                             '09 - Homicide (feat. Chevy Woods).mp3', null, '1');
        this.songs.push(song0);
        this.songs.push(song1);
        this.songs.push(song2);
        this.songs.push(song3);
        this.songs.push(song4);
        this.songs.push(song5);
        this.songs.push(song6);
        this.songs.push(song7);
        this.songs.push(song8);
    }

    getMixtapes(): Mixtape[] {
        return this.mixtapes;
    }

    getSongs(): Song[] {
        return this.songs;
    }
}