import { ProtocolXLoginData } from "./data/x_login_data";
export declare class ProtocolXParserOptions {
    enableMode4: boolean;
    loginData?: ProtocolXLoginData;
    constructor(enableMode4?: boolean, loginData?: ProtocolXLoginData);
}
