input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
if (input.buttonIsPressed(Button.A)) {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
} else {
    for (let index = 0; index < 4; index++) {
        basic.showNumber(0)
        basic.showString("Hello!")
    }
}
basic.forever(function () {
	
})
