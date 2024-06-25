export class ProtocolXDigitals
{
    static mask: bigint = BigInt(1) << BigInt(2);

    public statesMask: number;
    public changesMask: number;

    public digin1_state!: number;
    public digin1_changed!: boolean;
    public digin2_state!: number;
    public digin2_changed!: boolean;
    public digin3_state!: number;
    public digin3_changed!: boolean;
    public digin4_state!: number;
    public digin4_changed!: boolean;
    public digin5_state!: number;
    public digin5_changed!: boolean;
    public digin6_state!: number;
    public digin6_changed!: boolean;
    public digin7_state!: number;
    public digin7_changed!: boolean;
    public digin8_state!: number;
    public digin8_changed!: boolean;

    public digout1_state!: number;
    public digout1_changed!: boolean;
    public digout2_state!: number;
    public digout2_changed!: boolean;
    public digout3_state!: number;
    public digout3_changed!: boolean;
    public digout4_state!: number;
    public digout4_changed!: boolean;
    public digout5_state!: number;
    public digout5_changed!: boolean;
    public digout6_state!: number;
    public digout6_changed!: boolean;
    public digout7_state!: number;
    public digout7_changed!: boolean;
    public digout8_state!: number;
    public digout8_changed!: boolean;

    constructor (
        statesMask: number,
        changesMask: number
    )
    {
        this.statesMask = statesMask;
        this.changesMask = changesMask;
        this.applyMasks();
    }

    inState = (number: number) =>
    {
        let mask = 1 << (number - 1);
        return (this.statesMask & mask) === mask ? 1 : 0;
    }

    outState = (number: number) =>
    {
        let mask = 1 << (number + 7);
        return (this.statesMask & mask) === mask ? 1 : 0;
    }

    inChanged = (number: number) =>
    {
        let mask = 1 << (number - 1);
        return (this.changesMask & mask) === mask ? true : false;
    }

    outChanged = (number: number) =>
    {
        let mask = 1 << (number + 7);
        return (this.changesMask & mask) === mask ? true : false;
    }

    applyMasks = () =>
    {
        this.digin1_state = this.inState(1);
        this.digin2_state = this.inState(2);
        this.digin3_state = this.inState(3);
        this.digin4_state = this.inState(4);
        this.digin5_state = this.inState(5);
        this.digin6_state = this.inState(6);
        this.digin7_state = this.inState(7);
        this.digin8_state = this.inState(8);

        this.digout1_state = this.outState(1);
        this.digout2_state = this.outState(2);
        this.digout3_state = this.outState(3);
        this.digout4_state = this.outState(4);
        this.digout5_state = this.outState(5);
        this.digout6_state = this.outState(6);
        this.digout7_state = this.outState(7);
        this.digout8_state = this.outState(8);

        this.digin1_changed = this.inChanged(1);
        this.digin2_changed = this.inChanged(2);
        this.digin3_changed = this.inChanged(3);
        this.digin4_changed = this.inChanged(4);
        this.digin5_changed = this.inChanged(5);
        this.digin6_changed = this.inChanged(6);
        this.digin7_changed = this.inChanged(7);
        this.digin8_changed = this.inChanged(8);

        this.digout1_changed = this.outChanged(1);
        this.digout2_changed = this.outChanged(2);
        this.digout3_changed = this.outChanged(3);
        this.digout4_changed = this.outChanged(4);
        this.digout5_changed = this.outChanged(5);
        this.digout6_changed = this.outChanged(6);
        this.digout7_changed = this.outChanged(7);
        this.digout8_changed = this.outChanged(8);
    }
}