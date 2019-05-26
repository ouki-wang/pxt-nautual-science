//% color=#70c0f0 icon="\uf042"
namespace OLED {
    let TCS34725_ADDRESS = 0x29;
    let TCS34725_ID = 0x12
    function writeReg(reg: number, dat: number): void {
        let buf = pins.createBuffer(2);
        buf[0] = reg | 0x80;
        buf[1] = dat;
        pins.i2cWriteBuffer(TCS34725_ADDRESS, buf);
    }

    function readReg(reg: number): number {
        pins.i2cWriteNumber(TCS34725_ADDRESS, reg | 0x80, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(TCS34725_ADDRESS, NumberFormat.UInt8BE);
    }

    function getInt8LE(reg: number): number {
        pins.i2cWriteNumber(TCS34725_ADDRESS, reg | 0x80, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(TCS34725_ADDRESS, NumberFormat.Int8LE);
    }

    function getUInt16LE(reg: number): number {
        pins.i2cWriteNumber(TCS34725_ADDRESS, reg | 0x80, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(TCS34725_ADDRESS, NumberFormat.UInt16LE);
    }

    function getInt16LE(reg: number): number {
        pins.i2cWriteNumber(TCS34725_ADDRESS, reg | 0x80, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(TCS34725_ADDRESS, NumberFormat.Int16LE);
    }

    let R = 0
    let G = 0
    let B = 0
    let C = 0
    let TCS34725_BEGIN = 0

    function tcs34725_begin() {
        let id = readReg(0x12);
        TCS34725_BEGIN = 1;
        writeReg(0x01, 0xEB);
        writeReg(0x0F, 0x01);
        writeReg(0x00, 0x01);
        basic.pause(3);
        writeReg(0x00, 0x01 | 0x02);
    }

    function getRGBC() {
        if (!TCS34725_BEGIN) tcs34725_begin();

        C = getUInt16LE(0x14);
        R = getUInt16LE(0x16);
        G = getUInt16LE(0x18);
        B = getUInt16LE(0x1A);

        basic.pause(50);
        let ret = readReg(0)
        ret |= 0x10;
        writeReg(0, ret)
    }

    //% block="Get red"
    //% weight=80
    export function getRed(): number {
        getRGBC();
        return R;
    }

    //% block="Get green"
    //% weight=79
    export function getGreen(): number {
        getRGBC();
        return G;
    }

    //% block="Get blue"
    //% weight=78
    export function getBlue(): number {
        getRGBC();
        return B;
    }

    //% block="Get C"
    //% weight=77
    export function getC(): number {
        getRGBC();
        return C;
    }
}