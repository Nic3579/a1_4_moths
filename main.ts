input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        // first jumping jack position
        basic.showLeds(`
            . # # # .
            . # # # .
            . . # . .
            . # . # .
            . # . # .
            `)
        // second jumping jack position
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
