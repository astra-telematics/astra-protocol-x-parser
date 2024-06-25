export class ProtocolXGritterDataBsEn15430
{
    static mask: bigint = BigInt(1) << BigInt(22);

    public ploughBroomMode: number;
    public spreaderMode: number;
    public spinnerWidthM: number;
    public rateGm2: number;

    constructor (
        ploughBroomMode: number,
        spreaderMode: number,
        spinnerWidthM: number,
        rateGm2: number,
    )
    {
        this.ploughBroomMode = ploughBroomMode;
        this.spreaderMode = spreaderMode;
        this.spinnerWidthM = spinnerWidthM;
        this.rateGm2 = rateGm2;
    }
}