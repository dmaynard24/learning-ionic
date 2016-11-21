export class Mixtape {
    id: string;
    title: string;
    artistId: string;
    releaseDate: Date;

    // optional
    artwork: string;

    constructor(_id: string, _title: string, _artistId: string, _releaseDate: Date, _artwork?: string) {
        this.id = _id;
        this.title = _title;
        this.artistId = _artistId;
        this.releaseDate = _releaseDate;

        // optional
        this.artwork = _artwork;
    }
}