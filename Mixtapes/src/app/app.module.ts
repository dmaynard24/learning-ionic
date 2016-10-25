import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MixtapesApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';
import { MixtapesPage } from '../pages/mixtapes/mixtapes';
import { MixtapePage } from '../pages/mixtapes/mixtape/mixtape';
import { SearchPage } from '../pages/search/search';
import { ArtistsPage } from '../pages/artists/artists';
import { SongsPage } from '../pages/songs/songs';

@NgModule({
    declarations: [
        MixtapesApp,
        TabsPage,
        HomePage,
        MixtapesPage,
        MixtapePage,
        SearchPage,
        ArtistsPage,
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
        HomePage,
        MixtapesPage,
        MixtapePage,
        SearchPage,
        ArtistsPage,
        SongsPage
    ],
    providers: []
})
export class AppModule {}