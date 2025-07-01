export class ProtocolZModule32
{
    static mask: bigint = BigInt(1) << BigInt(31);

    public u8_1: number;
    public i8_1: number;
    public u16_1: number;
    public i16_1: number;
    public u32_1: number;
    public u16_2: number;
    public i16_2: number;
    public i8_2: number;
    public u32_2: number;
    public u32_3: number;
    public u16_3: number;
    public u8_3: number;

    constructor(
        u8_1: number,
        i8_1: number,
        u16_1: number,
        i16_1: number,
        u32_1: number,
        u16_2: number,
        i16_2: number,
        i8_2: number,
        u32_2: number,
        u32_3: number,
        u16_3: number,
        u8_3: number
    ) {
        this.u8_1 = u8_1;
        this.i8_1 = i8_1;
        this.u16_1 = u16_1;
        this.i16_1 = i16_1;
        this.u32_1 = u32_1;
        this.u16_2 = u16_2;
        this.i16_2 = i16_2;
        this.i8_2 = i8_2;
        this.u32_2 = u32_2;
        this.u32_3 = u32_3;
        this.u16_3 = u16_3;
        this.u8_3 = u8_3;
    }
}