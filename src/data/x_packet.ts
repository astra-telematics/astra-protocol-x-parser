import { astraCrc } from "../crc";
import { ProtocolXReport } from "./x_report";

const binutils = require('binutils64');

export class ProtocolXPacket
{    
    constructor(){}

    private length?: number;
    public reports: ProtocolXReport[] = [];

    static fromData (data: Buffer): ProtocolXPacket | null
    {
        let packet = new ProtocolXPacket();
        let reader = new binutils.BinaryReader(data);

        if (data.length >= 6)
        {
            // skip protocol id
            reader.ReadBytes(1);
            // packet length
            packet.length = reader.ReadUInt16();
            // number of reports
            let numReports = reader.ReadUInt8();

            // confirm packet length
            if (packet.length === data.length)
            {
                // confirm crc
                if (data.readUint16BE(data.length-2) === astraCrc(data.subarray(0, data.length-2)))
                {
                    // check there are reports
                    if (numReports > 0)
                    {
                        // parse reports
                        for (let i = 0; i < numReports; i++)
                        {
                            packet.reports.push(ProtocolXReport.fromReader(reader));
                        }
                        
                        return packet;
                    }
                    else
                    {
                        throw Error('Empty packet');
                    }
                }
                else
                {
                    throw Error('Bad checksum');
                }
            }
            else
            {
                throw Error('Packet length incorrect');
            }
        }
        else
        {
            throw Error('Packet too small');
        }

        return null;
    }
}