export default class BreakfastDS {
    private readonly breakfastId: number;
    private readonly dateISO: string;
    private readonly dateFormatFrench: string;

    constructor(breakfastId: number, dateISO: string, dateFormatFrench: string) {
        this.breakfastId = breakfastId;
        this.dateISO = dateISO;
        this.dateFormatFrench = dateFormatFrench;
    }

    public getDateFormatFrench(){
        return this.dateFormatFrench;
    }
}