function feliz () {
	
}
function enojado () {
    basic.showLeds(`
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        . # . # .
        `)
}
input.onButtonPressed(Button.A, function () {
    basic.showString("le das luz")
    basic.showLeds(`
        # # # . .
        # . . . #
        . # # . #
        . . # . #
        # # . . #
        `)
    basic.pause(1000)
    basic.showString("gracias")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
})
function triste () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # # # .
        # . . . #
        `)
}
function por_que () {
	
}
function eeeeeee () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # # # # #
        . . . . .
        `)
}
