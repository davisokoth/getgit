import {Deserializable} from './deserializable.model';

export class User {
    login?: string;
    id?: number;
    userId?: string;
    avatar_url?: string;
    url?: string;
    repo_url?: string;
    type?: string;
    score?: number;
    followers?: number;
    email?: string;
    name?: string;
    profile?: string;

    constructor(id: string, name: string, email: string, profile: string, avatar_url: string, score: number) {
        this.userId = id;
        this.name = name;
        this.email = email;
        this.profile = profile;
        this.avatar_url = avatar_url;
        this.score = score;
    }
}
