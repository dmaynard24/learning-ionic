import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../../services/data.service';
import { AudioService } from '../../../services/audio.service';
import { Artist } from '../../../objects/artist';
import { Mixtape } from '../../../objects/mixtape';
import { Song } from '../../../objects/song';

@Component({
    selector: 'artist-page',
    templateUrl: 'artist.html'
})
export class ArtistPage {
    artist: Artist;
    songs: Song[] = [];
    mixtapes: Mixtape[] = [];
    hasSongs: boolean = false;
    hasMixtapes: boolean = false;

    constructor(public navController: NavController, 
                private navParams: NavParams, 
                private dataService: DataService, 
                private audioService: AudioService) {
        this.artist = navParams.get('artist');
    }

    ngOnInit() {
        this.getSongs();
        this.getMixtapes();
    }

    getSongs() {
        let allSongs: Song[] = this.dataService.getSongs();
        allSongs.forEach(song => {
            if (song.artistId === this.artist.id) {
                this.songs.push(song);
            }
        });
        if (this.songs.length > 0) {
            this.hasSongs = true;
        }
    }

    playSong(_song: Song) {
        this.audioService.setGlobalSong(_song);
        this.audioService.playGlobalSong();
    }

    getMixtapes() {
        let allMixtapes: Mixtape[] = this.dataService.getMixtapes();
        allMixtapes.forEach(mixtape => {
            if (mixtape.artistId === this.artist.id) {
                this.mixtapes.push(mixtape);
            }
        });
        if (this.mixtapes.length > 0) {
            this.hasMixtapes = true;
        }
    }
}