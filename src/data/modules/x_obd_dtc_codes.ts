export class ProtocolXObdDtcCodes
{
    static mask: bigint = BigInt(1) << BigInt(14);

    public confirmedDtc1: string;
    public confirmedDtc2: string;
    public confirmedDtc3: string;
    public confirmedDtc4: string;
    public confirmedDtc5: string;

    constructor (
        confirmedDtc1: string,
        confirmedDtc2: string,
        confirmedDtc3: string,
        confirmedDtc4: string,
        confirmedDtc5: string
    )
    {
        this.confirmedDtc1 = confirmedDtc1;
        this.confirmedDtc2 = confirmedDtc2;
        this.confirmedDtc3 = confirmedDtc3;
        this.confirmedDtc4 = confirmedDtc4;
        this.confirmedDtc5 = confirmedDtc5;
    }
}