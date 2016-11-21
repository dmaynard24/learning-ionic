import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MixtapesApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { LibraryPage } from '../pages/library/library';
import { FollowingPage } from '../pages/library/following/following';
// import { HomePage } from '../pages/home/home';
import { MixtapesPage } from '../pages/mixtapes/mixtapes';
import { MixtapePage } from '../pages/mixtapes/mixtape/mixtape';
import { SearchPage } from '../pages/search/search';
import { ArtistsPage } from '../pages/artists/artists';
import { ArtistPage } from '../pages/artists/artist/artist';
import { SongsPage } from '../pages/songs/songs';

import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';
import { AudioService } from '../services/audio.service';

@NgModule({
    declarations: [
        MixtapesApp,
        TabsPage,
        LibraryPage,
        FollowingPage,
        MixtapesPage,
        MixtapePage,
        SearchPage,
        ArtistsPage,
        ArtistPage,
        SongsPage
    ],
    imports: [
        IonicModule.forRoot(MixtapesApp, {}, {
            links: []
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MixtapesApp,
        TabsPage,
        LibraryPage,
        FollowingPage,
        MixtapesPage,
        MixtapePage,
        SearchPage,
        ArtistsPage,
        ArtistPage,
        SongsPage
    ],
    providers: [UserService, DataService, AudioService]
})
export class AppModule {}