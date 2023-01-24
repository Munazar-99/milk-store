export interface Model {
    count:   number;
    results: Result[];
}

export interface Result {
    name:    string;
    type:    string;
    storage: number;
    id:      string;
}