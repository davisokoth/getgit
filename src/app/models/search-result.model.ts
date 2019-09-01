import { User } from './user.model';

export class SearchResult {
    total_count: number;
    incomplete_results: boolean;
    items: User[];

    constructor(total_count: number, incomplete_results: boolean, items: User[]) {
        this.incomplete_results = incomplete_results;
        this.total_count = total_count;
        this.items = items;
    }
}
