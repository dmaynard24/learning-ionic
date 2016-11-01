export class Artist {
    // required
    id: string;
    name: string;

    // optional
    image: string;

    constructor(_id: string, _name: string, _image?: string) {
        this.id = _id;
        this.name = _name;

        // optional
        this.image = _image;
    }
}