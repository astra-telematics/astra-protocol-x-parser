export class ProtocolZModule35
{
    static mask: bigint = BigInt(1) << BigInt(34);

    str1: string;
    buffer1: Buffer;
    buffer2: Buffer;
    buffer3: Buffer;
    buffer4: Buffer;
    buffer5: Buffer;
    str2: string;
    str3: string;
    u8_1: number;
    u8_2: number;
    u8_3: number;

    constructor (
        str1: string,
        buffer1: Buffer,
        buffer2: Buffer,
        buffer3: Buffer,
        buffer4: Buffer,
        buffer5: Buffer,
        str2: string,
        str3: string,
        u8_1: number,
        u8_2: number,
        u8_3: number
    ) {
        this.str1 = str1;
        this.buffer1 = buffer1;
        this.buffer2 = buffer2;
        this.buffer3 = buffer3;
        this.buffer4 = buffer4;
        this.buffer5 = buffer5;
        this.str2 = str2;
        this.str3 = str3;
        this.u8_1 = u8_1;
        this.u8_2 = u8_2;
        this.u8_3 = u8_3;
    }
}