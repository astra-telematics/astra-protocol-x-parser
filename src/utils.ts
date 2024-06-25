export function readU24 (reader: any)
{
    let u24 = reader.ReadUInt8();
    u24 <<= 8;
    u24 |= reader.ReadUInt8();
    u24 <<= 8;
    u24 |= reader.ReadUInt8();
    return u24;
}

export function readU16BE (reader: any)
{
    let bytes: Buffer = reader.ReadBytes(2);
    return (bytes[1] << 8) | bytes[0];
}

export function readU32BE (reader: any)
{
    let bytes: Buffer = reader.ReadBytes(4);
    return (bytes[3] << 24) | (bytes[2] << 16) | (bytes[1] << 8) | bytes[0];
}