export class Song {
    // required
    id: string;
    title: string;
    artist: string;
    audio: string;

    // optional
    artwork: string;
    mixtapeId: string;

    // calculated
    duration: number;
    isPlaying: boolean = false;

    constructor(_id: string, _title: string, _artist: string, _audio: string, _artwork?: string, _mixtapeId?: string) {
        // required
        this.id = _id;
        this.title = _title;
        this.artist = _artist;
        this.audio = _audio;

        // optional
        this.artwork = _artwork;
        this.mixtapeId = _mixtapeId;
    }
}