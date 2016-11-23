import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DataService } from '../../services/data.service';
import { ArtistPage } from './artist/artist';
import { Artist } from '../../objects/artist';

@Component({
    selector: 'artists-page',
    templateUrl: 'artists.html'
})
export class ArtistsPage {
    artists: Artist[];
    hasArtists: boolean = false;

    constructor(public navController: NavController,
                private dataService: DataService) {

    }

    ngOnInit() {
        this.initializeArtists();
    }

    initializeArtists() {
        this.dataService.getArtists().then((data) => {
            this.artists = data;
            this.hasArtists = true;
        });
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

    onNavigateToArtist(_artist: Artist) {
        this.navController.push(ArtistPage, {
            artist: _artist
        });
    }
}