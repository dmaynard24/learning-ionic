import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import _ from 'lodash';

import { UserService } from '../../../services/user.service';
import { DataService } from '../../../services/data.service';
import { User } from '../../../objects/user';
import { Artist } from '../../../objects/artist';

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
        this.allArtists = _.cloneDeep(this.dataService.getArtists());
        let notFollowed: Artist[] = [];
        this.allArtists.forEach((artist, i) => {
            if (_.indexOf(this.user.following, artist.id) < 0) {
                notFollowed.push(artist);
            }
        });

        _.pullAll(this.allArtists, notFollowed);
        this.initializeArtists();

        this.hasArtists = true;
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
}