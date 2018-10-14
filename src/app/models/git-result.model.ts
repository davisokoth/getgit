import {Deserializable} from './deserializable.model';
import { User } from './user.model';

export class GitResult {
    total_count: number;
    incomplete_results: boolean;
    items: User[];

    /*
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
    */
}
