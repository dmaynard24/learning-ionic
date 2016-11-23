import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import _ from 'lodash';

import { UserService } from '../../../services/user.service';
import { DataService } from '../../../services/data.service';
import { User } from '../../../objects/user';
import { Artist } from '../../../objects/artist';
import { ArtistPage } from '../../../pages/artists/artist/artist';

@Component({
    selector: 'following-page',
    templateUrl: 'following.html'
})
export class FollowingPage {
    user: User;
    hasUser: boolean = false;

    allArtists: Artist[];
    artists: Artist[]; // followed artists
    hasArtists: boolean = false;

    constructor(public navController: NavController,
                private userService: UserService,
                private dataService: DataService) {
        this.user = this.userService.getUser();
        this.hasUser = true;
    }

    ngOnInit() {
        this.getFollowedArtists();
    }

    ionViewDidEnter() {
        if (this.user.following.length < 1) {
            this.navController.pop();
        } else {
            this.getFollowedArtists();
        }
    }

    getFollowedArtists() {
        this.dataService.getArtists().then((data) => {
            this.allArtists = data;

            let notFollowed: Artist[] = [];
            this.allArtists.forEach((artist, i) => {
                if (_.indexOf(this.user.following, artist.id) < 0) {
                    notFollowed.push(artist);
                }
            });

            _.pullAll(this.allArtists, notFollowed);
            this.initializeArtists();

            this.hasArtists = true;
        });
    }

    initializeArtists() {
        this.artists = this.allArtists;
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