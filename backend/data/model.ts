export interface MilkData {
    count:   number;
    results: Result[];
}

export interface Result {
    name:    string;
    type:    string;
    storage: number;
    id:      string;
}