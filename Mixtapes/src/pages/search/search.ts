import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DataService } from '../../services/data.service';
import { AudioService } from '../../services/audio.service';
import { Mixtape } from '../../objects/mixtape';
import { Song } from '../../objects/song';
import { MixtapePage } from '../mixtapes/mixtape/mixtape';

@Component({
    selector: 'search-page',
    templateUrl: 'search.html'
})
export class SearchPage {
    segment: string = 'all';

    songs: Song[];
    hasSongs: boolean = false;

    mixtapes: Mixtape[];
    hasMixtapes: boolean = false;

    constructor(public navController: NavController, private dataService: DataService, private audioService: AudioService) {
        this.initializeMixtapes();
        this.initializeSongs();
    }

    initializeMixtapes() {
        this.mixtapes = this.dataService.getMixtapes();
        this.hasMixtapes = true;
    }

    initializeSongs() {
        this.songs = this.dataService.getSongs();
        this.hasSongs = true;
    }

    getItems(event: any) {
        this.initializeSongs();
        this.initializeMixtapes();

        let input = event.target.value;

        if (input && input.trim() != '') {
            this.mixtapes = this.mixtapes.filter((mixtape) => {
                return (mixtape.title.toLowerCase().indexOf(input.toLowerCase()) > -1);
            });
            this.songs = this.songs.filter((song) => {
                return (song.title.toLowerCase().indexOf(input.toLowerCase()) > -1);
            });
        }
    }

    playSong(_song: Song) {
        this.audioService.setGlobalSong(_song);
        this.audioService.playGlobalSong();
    }

    getArtistName(_artistId: string) {
        return this.dataService.getArtist(_artistId).name;
    }

    onNavigateToMixtape(_mixtape: Mixtape) {
        this.navController.push(MixtapePage, {
            mixtape: _mixtape
        });
    }
}