import { ProtocolXLoginData } from "./data/x_login_data";
import { ProtocolXPacket } from "./data/x_packet";
import { ProtocolXParserOptions } from "./x_parser_options";

export class ProtocolXParser
{
    private data: Buffer;
    private options: ProtocolXParserOptions;
    public isLogin: boolean = false;
    public loginData?: ProtocolXLoginData;
    public packet?: ProtocolXPacket | null;

    constructor (
        data: Buffer,
        options: ProtocolXParserOptions = new ProtocolXParserOptions()
    )
    {
        this.data = data;
        this.options = options;
        this.parse();
    }

    private checkLogin ()
    {
        let decoded: string = this.data.toString('ascii');

        if (decoded.startsWith('$ASTRA;'))
        {
            let components: string[] = decoded.replace('\r\n', '').split(';');

            if (components.length >= 7)
            {
                if (components[5] === 'X')
                {
                    this.loginData = new ProtocolXLoginData(
                        components[2],
                        components[1],
                        components[3],
                        components[4],
                        components[6],
                        components.length >= 8 ? components[7].replace('\r', '') : undefined
                    );

                    return true;
                }
            }
        }

        return false;
    }

    private parse ()
    {
        if (this.checkLogin())
        {
            this.isLogin = true;
        }
        else
        {
            this.packet = ProtocolXPacket.fromData(this.data, this.options.enableMode4);
        }
    }
}