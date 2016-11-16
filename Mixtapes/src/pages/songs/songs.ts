import { Component } from '@angular/core';

import { NavController, ActionSheetController } from 'ionic-angular';

import { DataService } from '../../services/data.service';
import { AudioService } from '../../services/audio.service';
import { Artist } from '../../objects/artist';
import { Mixtape } from '../../objects/mixtape';
import { Song } from '../../objects/song';
import { ArtistPage } from '../../pages/artists/artist/artist';
import { MixtapePage } from '../../pages/mixtapes/mixtape/mixtape';

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
            song.mixtapeTitle = this.dataService.getMixtape(song.mixtapeId).title;
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

    getArtist(_artistId: string): Artist {
        return this.dataService.getArtist(_artistId);
    }

    getArtistName(_artistId: string): string {
        return this.getArtist(_artistId).name;
    }

    getMixtape(_mixtapeId: string): Mixtape {
        return this.dataService.getMixtape(_mixtapeId);
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
                        this.navController.push(ArtistPage, {
                            artist: this.getArtist(_song.artistId)
                        });
                    }
                }, {
                    icon: 'disc',
                    text: 'Go to Mixtape',
                    handler: () => {
                        this.navController.push(MixtapePage, {
                            mixtape: this.getMixtape(_song.mixtapeId)
                        });
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