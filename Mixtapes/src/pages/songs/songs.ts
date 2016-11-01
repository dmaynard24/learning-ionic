import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DataService } from '../../services/data.service';
import { AudioService } from '../../services/audio.service';
import { Song } from '../../objects/song';

@Component({
    selector: 'songs-page',
    templateUrl: 'songs.html'
})
export class SongsPage {
    songs: Song[];
    hasSongs: boolean = false;

    constructor(public navController: NavController, private dataService: DataService, private audioService: AudioService) {}

    ngOnInit() {
        this.initializeSongs();
    }

    initializeSongs() {
        this.songs = this.dataService.getSongs();
        this.songs.forEach(song => {
            song.mixtapeTitle = this.dataService.getMixtapeTitle(song.mixtapeId);
        });
        this.hasSongs = true;
    }

    getItems(event: any) {
        this.initializeSongs();

        let input = event.target.value;

        if (input && input.trim() != '') {
            this.songs = this.songs.filter((song) => {
                return (song.title.toLowerCase().indexOf(input.toLowerCase()) > -1);
            });
        }
    }

    playSong(_song: Song) {
        this.audioService.setGlobalSong(_song);
        this.audioService.playGlobalSong();
    }

    getArtistName(_artistId: string): string {
        return this.dataService.getArtistName(_artistId);
    }
 }