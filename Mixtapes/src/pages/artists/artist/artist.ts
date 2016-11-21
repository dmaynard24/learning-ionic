import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../../services/data.service';
import { AudioService } from '../../../services/audio.service';
import { UserService } from '../../../services/user.service';
import { Artist } from '../../../objects/artist';
import { Mixtape } from '../../../objects/mixtape';
import { Song } from '../../../objects/song';
import { User } from '../../../objects/user';
import { MixtapePage } from '../../../pages/mixtapes/mixtape/mixtape';

import _ from 'lodash';

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
    user: User;
    isFollowing: boolean = null;

    constructor(public navController: NavController, 
                private userService: UserService,
                private navParams: NavParams, 
                private dataService: DataService, 
                private audioService: AudioService) {
        this.artist = navParams.get('artist');
        this.user = this.userService.getUser();
    }

    ngOnInit() {
        this.checkIfFollowing();
        this.getSongs();
        this.getMixtapes();
    }

    ionViewDidEnter() {
        this.checkIfFollowing();
    }

    checkIfFollowing() {
        this.isFollowing = this.user.following.indexOf(this.artist.id) > -1;
    }

    follow() {
        this.user.following.push(this.artist.id);
        this.isFollowing = true;
    }

    unfollow() {
        _.pull(this.user.following, this.artist.id);
        this.isFollowing = false;
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

    onNavigateToMixtape(_mixtape: Mixtape) {
        this.navController.push(MixtapePage, {
            mixtape: _mixtape
        });
    }
}