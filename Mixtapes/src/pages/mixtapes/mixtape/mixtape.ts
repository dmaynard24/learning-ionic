import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../../services/data.service';
import { Mixtape } from '../../../objects/mixtape';
import { Song } from '../../../objects/song';

@Component({
    selector: 'mixtape-page',
    templateUrl: 'mixtape.html'
})
export class MixtapePage {
    mixtape: Mixtape;
    songs: Song[] = [];
    hasSongs: boolean = false;

    constructor(public navController: NavController, private navParams: NavParams, private dataService: DataService) {
        this.mixtape = navParams.get('mixtape');
    }

    ngOnInit() {
        this.getSongs();
        this.hasSongs = true;
    }

    getSongs() {
        this.songs = this.dataService.getSongs();
    }

    togglePlay(index: number) {
        this.songs.forEach((song, i) => {
            // found song that's playing, if there is one
            if (song.isPlaying && i !== index) {
                let audioToPause = <HTMLAudioElement>(document.getElementById(i.toString())); // get the playing element
                audioToPause.pause(); // pause the playing song
                song.isPlaying = false;
            }
            // found the song that was clicked
            if (i === index) {
                let clickedAudio = <HTMLAudioElement>(document.getElementById(i.toString())); // get the clicked element
                if (song.isPlaying) {
                    clickedAudio.pause(); // pause the clicked song
                } else {
                    clickedAudio.currentTime = 0; // reset the song back to the beginning
                    clickedAudio.play(); // play the clicked song
                }
                song.isPlaying = !song.isPlaying;
            }
        });
    }
}