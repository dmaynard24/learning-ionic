export class Mixtape {
    id: string;
    title: string;
    artistId: string;

    // optional
    artwork: string;

    constructor(_id: string, _title: string, _artistId: string, _artwork?: string) {
        this.id = _id;
        this.title = _title;
        this.artistId = _artistId;

        // optional
        this.artwork = _artwork;
    }
}