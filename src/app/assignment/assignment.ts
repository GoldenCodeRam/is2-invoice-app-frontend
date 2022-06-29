export enum Status {
    READY,
    PROCESSING,
    FINISHED,
    SENDED,
}

export class Assignment {
    public readonly id: number;
    public readonly title: string;
    public readonly authors: string;
    public readonly director: string;
    public readonly status: Status;

    constructor(partial: Partial<Assignment>) {
        this.id = partial.id || 0;
        this.title = partial.title || '';
        this.authors = partial.authors || '';
        this.director = partial.director || '';
        this.status = partial.status || 0;
    }
}
