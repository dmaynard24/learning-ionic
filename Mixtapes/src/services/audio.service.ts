import { Injectable } from '@angular/core';

import { DataService } from './data.service';
import { Song } from '../objects/song';

@Injectable()
export class AudioService {
    globalSong: Song;
    globalAudio = new Audio();
    
    constructor(private dataService: DataService) {
        this.globalAudio.preload = 'true';
    }

    setGlobalSong(_song: Song): void {
        this.globalSong = _song;
        this.globalAudio.src = '../assets/data/artists/' + this.dataService.getArtist(_song.artistId).name 
                             + '/' + this.dataService.getMixtape(_song.mixtapeId).title + '/' + _song.audio;
        this.globalAudio.currentTime = 0;
        this.globalAudio.volume = 0.25;
    }

    playGlobalSong(): void {
        this.globalAudio.play();
    }

    pauseGlobalSong(): void {
        this.globalAudio.pause();
    }
}