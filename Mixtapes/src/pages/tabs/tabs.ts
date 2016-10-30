import { Component } from '@angular/core';

import { LibraryPage } from '../library/library';
// import { HomePage } from '../home/home';
import { MixtapesPage } from '../mixtapes/mixtapes';
import { SearchPage } from '../search/search';
import { ArtistsPage } from '../artists/artists';
import { SongsPage } from '../songs/songs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = LibraryPage;
    tab2Root: any = MixtapesPage;
    tab3Root: any = SearchPage;
    tab4Root: any = ArtistsPage;
    tab5Root: any = SongsPage;

    constructor() {}
}