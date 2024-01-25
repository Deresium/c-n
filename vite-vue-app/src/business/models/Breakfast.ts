export default class Breakfast {
    private readonly breakfastId: number;
    private readonly dateISO: string;
    private readonly dateFormatFrench: string;

    constructor(breakfastId: number, dateISO: string, dateFormatFrench: string) {
        this.breakfastId = breakfastId;
        this.dateISO = dateISO;
        this.dateFormatFrench = dateFormatFrench;
    }

    public getBreakfastId(): number {
        return this.breakfastId;
    }

    public getDateISO(): string {
        return this.dateISO;
    }

    public getDateFormatFrench(): string {
        return this.dateFormatFrench;
    }
}