import { Component } from '@angular/core';

import { NavController, ActionSheetController } from 'ionic-angular';

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

    constructor(public navController: NavController,
                public actionSheetController: ActionSheetController,
                private dataService: DataService,
                private audioService: AudioService) {}

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

    presentActionSheet(_song: Song) {
        let actionSheet = this.actionSheetController.create({
            title: _song.title,
            buttons: [
                {
                    icon: 'add',
                    text: 'Add to Library',
                    handler: () => {
                        console.log('add to library clicked');
                    }
                }, {
                    icon: 'contact',
                    text: 'Go to Artist',
                    handler: () => {
                        console.log('go to artist clicked');
                    }
                }, {
                    icon: 'disc',
                    text: 'Go to Mixtape',
                    handler: () => {
                        console.log('go to mixtape clicked');
                    }
                }, {
                    icon: 'close',
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }
 }