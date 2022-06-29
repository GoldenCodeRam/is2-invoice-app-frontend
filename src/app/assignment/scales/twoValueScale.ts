export class TwoValueScale {
    public readonly id: Number;
    public readonly trueOptionValue: Number;
    public readonly falseOptionValue: Number;

    constructor(partial: Partial<TwoValueScale>) {
        this.id = partial.id || 0;
        this.trueOptionValue = partial.trueOptionValue || 0.0;
        this.falseOptionValue = partial.falseOptionValue || 0.0;
    }
}
