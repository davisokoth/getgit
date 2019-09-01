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

    constructor(model: any) {
        this.userId = model.id;
        this.name = model.name;
        this.email = model.email;
        this.profile = model.profile;
        this.avatar_url = model.avatar_url;
        this.score = model.score;
        this.password = model.password;
    }
}
