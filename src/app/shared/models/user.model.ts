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
    password?: string;

    constructor(id: string, name: string, email: string, profile: string, avatar_url: string, score: number, password: string) {
        this.userId = id;
        this.name = name;
        this.email = email;
        this.profile = profile;
        this.avatar_url = avatar_url;
        this.score = score;
        this.password = password;
    }
}
