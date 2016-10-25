import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { Song } from '../../objects/song';

@Component({
    templateUrl: 'global-song.popover.html'
})
export class GlobalSongPopover {
    song: Song;

    constructor(public viewController: ViewController) {
        // this.song = this.navParams.get('song');
    }

    close() {
        this.viewController.dismiss();
    }
}