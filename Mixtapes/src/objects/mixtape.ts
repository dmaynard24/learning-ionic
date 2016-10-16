export class Mixtape {
    id: string;
    artwork: string;
    title: string;
    artist: string;

    constructor(_id: string, _artwork: string, _title: string, _artist: string) {
        this.id = _id;
        this.artwork = _artwork;
        this.title = _title;
        this.artist = _artist;
    }
}