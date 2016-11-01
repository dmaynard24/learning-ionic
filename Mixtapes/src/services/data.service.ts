import { Injectable } from '@angular/core';

import { Artist } from '../objects/artist';
import { Mixtape } from '../objects/mixtape';
import { Song } from '../objects/song';

@Injectable()
export class DataService {
    artists: Artist[] = [];
    mixtapes: Mixtape[] = [];
    songs: Song[] = [];
    
    constructor() {
        // Artists data
        let artist0 = new Artist('0', 'Wiz Khalifa');
        this.artists.push(artist0);
        this.setArtistImages();

        // Mixtapes data
        let tape0 = new Mixtape('1', 'Cabin Fever', '0');
        let tape1 = new Mixtape('2', 'Kush & OJ', '0');
        let tape2 = new Mixtape('3', 'Taylor Allderdice', '0');
        this.mixtapes.push(tape0);
        this.mixtapes.push(tape1);
        this.mixtapes.push(tape2);
        this.setMixtapeArtworks();

        // Songs data
        let song0 = new Song('0', 'Phone Numbers (feat. Trae Tha Truth & Big Sean)', '0',
                             '01 - Phone Numbers (feat. Trae Tha Truth & Big Sean).mp3', null, '1');
        let song1 = new Song('1', 'Cabin Fever', '0',
                             '02 - Cabin Fever.mp3', null, '1');
        let song2 = new Song('2', 'GangBang (feat. Big Sean)', '0',
                             '03 - GangBang (feat. Big Sean).mp3', null, '1');
        let song3 = new Song('3', 'Errday (feat. Juicy J)', '0',
                             '04 - Errday (feat. Juicy J).mp3', null, '1');
        let song4 = new Song('4', 'Taylor Gang (feat. Chevy Woods)', '0',
                             '05 - Taylor Gang (feat. Chevy Woods).mp3', null, '1');
        let song5 = new Song('5', 'Hustlin', '0',
                             '06 - Hustlin.mp3', null, '1');
        let song6 = new Song('6', 'Middle of You (feat. Chevy Woods, Nikkiya & MDMA)', '0',
                             '07 - Middle of You (feat. Chevy Woods, Nikkiya & MDMA).mp3', null, '1');
        let song7 = new Song('7', 'WTF', '0',
                             '08 - WTF.mp3', null, '1');
        let song8 = new Song('8', 'Homicide (feat. Chevy Woods)', '0',
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
        this.setSongArtworks();
    }

    getArtists(): Artist[] {
        return this.artists;
    }
    
    getArtistName(_artistId: string): string {
        let name: string;
        this.artists.forEach(artist => {
            if (artist.id === _artistId) {
                name = artist.name;
            }
        });
        return name;
    }

    setArtistImages() {
        this.artists.forEach(artist => {
            artist.image = '../assets/data/artists/' + artist.name + '/image.jpg';
        });
    }

    getMixtapes(): Mixtape[] {
        return this.mixtapes;
    }

    getMixtapeTitle(_mixtapeId: string): string {
        let title: string;
        this.mixtapes.forEach(mixtape => {
            if (mixtape.id === _mixtapeId) {
                title = mixtape.title;
            }
        });
        return title;
    }

    setMixtapeArtworks() {
        this.mixtapes.forEach(mixtape => {
            mixtape.artwork = '../assets/data/artists/' + this.getArtistName(mixtape.artistId) + '/' + mixtape.title + '/front.jpg';
        });
    }

    getSongs(): Song[] {
        return this.songs;
    }

    setSongArtworks() {
        this.songs.forEach(song => {
            if (!song.artwork) {
                song.artwork = '../assets/data/artists/' + this.getArtistName(song.artistId) + '/' + this.getMixtapeTitle(song.mixtapeId) + '/front.jpg';
            }
        });
    }
}