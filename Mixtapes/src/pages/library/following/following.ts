import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DataService } from '../../../services/data.service';
import { Artist } from '../../../objects/artist';

@Component({
    selector: 'following-page',
    templateUrl: 'following.html'
})
export class FollowingPage {
    artists: Artist[];
    hasArtists: boolean = false;

    constructor(public navController: NavController,
                private dataService: DataService) {

    }

    ngOnInit() {
        this.initializeArtists();
    }

    initializeArtists() {
        this.artists = this.dataService.getArtists();
        // this.songs.forEach(song => {
        //     song.mixtapeTitle = this.dataService.getMixtapeTitle(song.mixtapeId);
        // });
        this.hasArtists = true;
    }

    getItems(event: any) {
        this.initializeArtists();

        let input = event.target.value;

        if (input && input.trim() != '') {
            this.artists = this.artists.filter((artist) => {
                return (artist.name.toLowerCase().indexOf(input.toLowerCase()) > -1);
            });
        }
    }
}