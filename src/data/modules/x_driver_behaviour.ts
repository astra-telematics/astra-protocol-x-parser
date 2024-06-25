export class ProtocolXDriverBehaviour
{
    static mask: bigint = BigInt(1) << BigInt(4);

    public accelXMaxMss: number;
    public accelXMinMss: number;
    public accelYMaxMss: number;
    public accelYMinMss: number;
    public accelZMaxMss: number;
    public accelZMinMss: number;
    public idleTimeS: number;

    constructor (
        accelXMaxMss: number,
        accelXMinMss: number,
        accelYMaxMss: number,
        accelYMinMss: number,
        accelZMaxMss: number,
        accelZMinMss: number,
        idleTimeS: number
    )
    {
        this.accelXMaxMss = accelXMaxMss;
        this.accelXMinMss = accelXMinMss;
        this.accelYMaxMss = accelYMaxMss;
        this.accelYMinMss = accelYMinMss;
        this.accelZMaxMss = accelZMaxMss;
        this.accelZMinMss = accelZMinMss;
        this.idleTimeS = idleTimeS;
    }
}