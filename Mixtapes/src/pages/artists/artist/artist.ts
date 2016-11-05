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
    artist: Artist[];
    // songs: Song[] = [];
    // hasSongs: boolean = false;

    constructor(public navController: NavController, 
                private navParams: NavParams, 
                private dataService: DataService, 
                private audioService: AudioService) {
        this.artist = navParams.get('artist');
    }

    ngOnInit() {
        this.getSongs();
    }

    getSongs() {
        // let allSongs: Song[] = this.dataService.getSongs();
        // allSongs.forEach(song => {
        //     if (song.mixtapeId === this.mixtape.id) {
        //         this.songs.push(song);
        //     }
        // })
        // this.hasSongs = true;
    }

    playSong(_song: Song) {
        this.audioService.setGlobalSong(_song);
        this.audioService.playGlobalSong();
    }
}