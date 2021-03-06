import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Artist } from '../objects/artist';
import { Mixtape } from '../objects/mixtape';
import { Song } from '../objects/song';

import _ from 'lodash';

@Injectable()
export class DataService {
    artists: Artist[] = null;
    mixtapes: Mixtape[] = [];
    songs: Song[] = [];
    
    constructor(public http: Http) {
        // Artists data
        // let artist0 = new Artist('0', 'A$AP Rocky');
        // let artist1 = new Artist('1', 'Big Sean');
        // let artist2 = new Artist('2', 'J. Cole');
        // let artist3 = new Artist('3', 'Kid Cudi');
        // let artist4 = new Artist('4', 'Lil Wayne');
        // let artist5 = new Artist('5', 'Logic');
        // let artist6 = new Artist('6', 'Mac Miller');
        // let artist7 = new Artist('7', 'QuESt');
        // let artist8 = new Artist('8', 'Rick Ross');
        // let artist9 = new Artist('9', 'Rockie Fresh');
        // let artist10 = new Artist('10', 'T.I.');
        // let artist11 = new Artist('11', 'Travis Scott');
        // let artist12 = new Artist('12', 'Wale');
        // let artist13 = new Artist('13', 'Wiz Khalifa');
        // this.artists.push(artist0);
        // this.artists.push(artist1);
        // this.artists.push(artist2);
        // this.artists.push(artist3);
        // this.artists.push(artist4);
        // this.artists.push(artist5);
        // this.artists.push(artist6);
        // this.artists.push(artist7);
        // this.artists.push(artist8);
        // this.artists.push(artist9);
        // this.artists.push(artist10);
        // this.artists.push(artist11);
        // this.artists.push(artist12);
        // this.artists.push(artist13);

        // Mixtapes data
        let tape0 = new Mixtape('1', 'Cabin Fever', '13', new Date('February 17, 2011'));
        let tape1 = new Mixtape('2', 'Kush & OJ', '13', new Date('April 14, 2010'));
        let tape2 = new Mixtape('3', 'Taylor Allderdice', '13', new Date('March 13, 2012'));
        this.mixtapes.push(tape0);
        this.mixtapes.push(tape1);
        this.mixtapes.push(tape2);
        // this.setMixtapeArtworks();

        // Songs data
        let song0 = new Song('0', 'Phone Numbers (feat. Trae Tha Truth & Big Sean)', '13',
                             '01 - Phone Numbers (feat. Trae Tha Truth & Big Sean).mp3', null, '1');
        let song1 = new Song('1', 'Cabin Fever', '13',
                             '02 - Cabin Fever.mp3', null, '1');
        let song2 = new Song('2', 'GangBang (feat. Big Sean)', '13',
                             '03 - GangBang (feat. Big Sean).mp3', null, '1');
        let song3 = new Song('3', 'Errday (feat. Juicy J)', '13',
                             '04 - Errday (feat. Juicy J).mp3', null, '1');
        let song4 = new Song('4', 'Taylor Gang (feat. Chevy Woods)', '13',
                             '05 - Taylor Gang (feat. Chevy Woods).mp3', null, '1');
        let song5 = new Song('5', 'Hustlin', '13',
                             '06 - Hustlin.mp3', null, '1');
        let song6 = new Song('6', 'Middle of You (feat. Chevy Woods, Nikkiya & MDMA)', '13',
                             '07 - Middle of You (feat. Chevy Woods, Nikkiya & MDMA).mp3', null, '1');
        let song7 = new Song('7', 'WTF', '13',
                             '08 - WTF.mp3', null, '1');
        let song8 = new Song('8', 'Homicide (feat. Chevy Woods)', '13',
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
        // this.setSongArtworks();
    }

    getArtists() {
        if (this.artists) {
            return Promise.resolve(this.artists);
        }

        return new Promise(resolve => {
            this.http.get('http://localhost:8080/api/artists')
                .map(res => res.json())
                .subscribe(data => {
                    this.artists = data;
                    // set artist images
                    this.artists.forEach(artist => {
                        artist.image = '../assets/data/artists/' + artist.name + '/_image.jpg';
                    });
                    resolve(this.artists);
                });
        });
    }

    // getArtists(): Artist[] {
    //     return this.artists;
    // }

    getArtist(_artistId: string): Artist {
        return _.find(this.artists, ['id', _artistId]);
    }

    // setArtistImages() {
    //     this.artists.forEach(artist => {
    //         artist.image = '../assets/data/artists/' + artist.name + '/_image.jpg';
    //     });
    // }

    getMixtapes(): Mixtape[] {
        return this.mixtapes;
    }

    getMixtape(_mixtapeId: string): Mixtape {
        return _.find(this.mixtapes, ['id', _mixtapeId]);
    }

    setMixtapeArtworks() {
        this.mixtapes.forEach(mixtape => {
            mixtape.artwork = '../assets/data/artists/' + this.getArtist(mixtape.artistId).name + '/' + mixtape.title + '/front.jpg';
        });
    }

    getSongs(): Song[] {
        return this.songs;
    }

    setSongArtworks() {
        this.songs.forEach(song => {
            if (!song.artwork) {
                song.artwork = '../assets/data/artists/' + this.getArtist(song.artistId).name + '/' + this.getMixtape(song.mixtapeId).title + '/front.jpg';
            }
        });
    }
}