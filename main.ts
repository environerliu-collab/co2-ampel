input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(SCD40.get_relative_humidity(), 100)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    let co2 = 0
    if (co2 >= 1000) {
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(100)
    } else if (co2 < 1000) {
        basic.setLedColor(0x00ff00)
        basic.showIcon(IconNames.Happy, 100)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(SCD40.get_temperature(SCD40.SCD40_T_UNIT.C), 100)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.showNumber(SCD40.get_relative_humidity(), 100)
})
basic.showString("Ich bin CO2 ", 100)
