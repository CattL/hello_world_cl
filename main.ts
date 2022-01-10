input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallHeart)
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # . # . #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
