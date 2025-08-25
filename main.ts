input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    let co2 = 0
    if (co2 > 2000) {
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.pause(250)
    } else if (co2 < 1000) {
        basic.setLedColor(0x00ff00)
        basic.showIcon(IconNames.Happy, 250)
    }
})
