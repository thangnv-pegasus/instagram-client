

export interface IPOST {
    id: number;
    name: string;
    caption: string;
    comments: Array<object>;
    total_like: number;
    created_at: Date;
}