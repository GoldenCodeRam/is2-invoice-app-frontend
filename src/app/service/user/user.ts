export class User {
    public readonly firstName: string;
    public readonly lastName: string;

    constructor(partial: Partial<User>) {
        this.firstName = partial.firstName || '';
        this.lastName = partial.lastName || '';
    }

    public getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
