import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { MixtapesComponent } from './mixtapes/mixtapes.component';
import { SongsComponent } from './songs/songs.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'artists', component: ArtistsComponent },
    { path: 'mixtapes', component: MixtapesComponent },
    { path: 'songs', component: SongsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        ArtistsComponent,
        MixtapesComponent,
        SongsComponent,
        UsersComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
