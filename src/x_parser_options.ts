import { ProtocolXLoginData } from "./data/x_login_data";

export class ProtocolXParserOptions
{
    public enableMode4: boolean = false;
    public loginData?: ProtocolXLoginData;

    constructor(
        enableMode4: boolean = false,
        loginData?: ProtocolXLoginData
    )
    {
        this.enableMode4 = enableMode4;
        this.loginData = loginData;
    }
}