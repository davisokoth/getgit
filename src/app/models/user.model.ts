import {Deserializable} from './deserializable.model';

export class User {
    login?: string;
    id?: number;
    node_id?: string;
    avatar_url?: string;
    gravatar_id?: string;
    url?: string;
    html_url?: string;
    followers_url?: string;
    subscriptions_url?: string;
    organizations_url?: string;
    repos_url?: string;
    received_events_url?: string;
    type?: string;
    score?: number;
    followers?: number;
    email?: string;
    name?: string;

    constructor(login: string, url: string) {
        this.login = login;
        this.url = url;
    }

    /*
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
    */
}
