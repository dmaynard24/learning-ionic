import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../../services/data.service';
import { AudioService } from '../../../services/audio.service';
import { Mixtape } from '../../../objects/mixtape';
import { Artist } from '../../../objects/artist';
import { Song } from '../../../objects/song';

import moment from 'moment';

@Component({
    selector: 'mixtape-page',
    templateUrl: 'mixtape.html'
})
export class MixtapePage {
    mixtape: Mixtape;
    artist: Artist;
    hasArtist: boolean = false;
    songs: Song[] = [];
    hasSongs: boolean = false;

    constructor(public navController: NavController, 
                private navParams: NavParams, 
                private dataService: DataService, 
                private audioService: AudioService) {
        this.mixtape = navParams.get('mixtape');
    }

    ngOnInit() {
        this.setMixtapeArtist();
        this.getSongs();
    }

    setMixtapeArtist() {
        this.artist = this.dataService.getArtist(this.mixtape.artistId);
        this.hasArtist = true;
    }

    getSongs() {
        let allSongs: Song[] = this.dataService.getSongs();
        allSongs.forEach(song => {
            if (song.mixtapeId === this.mixtape.id) {
                this.songs.push(song);
            }
        })
        this.hasSongs = true;
    }

    playSong(_song: Song) {
        this.audioService.setGlobalSong(_song);
        this.audioService.playGlobalSong();
    }

    getArtistName(_artistId: string): string {
        return this.dataService.getArtist(_artistId).name;
    }

    getLegibleDate(_date: Date) {
        return moment(_date).format('MMMM D, YYYY');
    }
}