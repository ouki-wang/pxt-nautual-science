//% color=#27b0ba weight=100 icon="\uf26c"
namespace OLED {

    //% blockId=oled_show_text
    //% weight=99
    //% line.min=0 line.max=7
    //% text.defl="DFRobot"
    //% block="OLED show line %line|text %text"
    //% shim=OLED::showText
    export function showUserText(line: number, text: string): void {
        return;
    }
    /**
     * initialises the i2c OLED display
     * @param line line num (8 pixels per line), eg: 0
     * @param n value , eg: 2019
     */
    //% blockId=oled_show_number
    //% weight=98
    //% line.min=0 line.max=7
    //% block="OLED show line %line|number %n"
    //% shim=OLED::showNumber
    export function showUserNumber(line: number, n: number): void {
        return;
    }



    /**
     * clears the screen.
     */
    //% blockId=oled_clear_screen
    //% block="clear OLED display"
    //% icon="\uf1ec" 
    //% shim=OLED::clearDisplay
    export function clear(): void {
        return;
    }
}
