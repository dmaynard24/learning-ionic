export class User {
    // required
    id: string;
    firstName: string;
    username: string;

    // optional
    lastName: string;
    avatar: string;
    following: string[];
    friends: string[];

    constructor(_id: string, 
                _firstName: string, 
                _username: string, 
                _lastName?: string, 
                _avatar?: string, 
                _following?: string[], 
                _friends?: string[]) {
        this.id = _id;
        this.firstName = _firstName;
        this.username = _username;
        this.lastName = _lastName;
        this.avatar = _avatar;
        this.following = _following;
        this.friends = _friends;
    }
}