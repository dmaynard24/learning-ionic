import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MixtapesApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { MixtapesPage } from '../pages/mixtapes/mixtapes';
import { MixtapePage } from '../pages/mixtapes/mixtape/mixtape';
import { SearchPage } from '../pages/search/search';
import { ArtistsPage } from '../pages/artists/artists';
import { SongsPage } from '../pages/songs/songs';

import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
    declarations: [
        MixtapesApp,
        HomePage,
        MixtapesPage,
        MixtapePage,
        SearchPage,
        ArtistsPage,
        SongsPage,
        TabsPage
    ],
    imports: [
        IonicModule.forRoot(MixtapesApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MixtapesApp,
        HomePage,
        MixtapesPage,
        MixtapePage,
        SearchPage,
        ArtistsPage,
        SongsPage,
        TabsPage
    ],
    providers: []
})
export class AppModule {}