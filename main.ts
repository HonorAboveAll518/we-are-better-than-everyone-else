/**
 * Makes the k8 move forward
 */
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(6)
    basic.showIcon(IconNames.Umbrella)
})
/**
 * Makes the k8 stop moving
 */
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(5)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
/**
 * Makes the k8 turn left
 */
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
/**
 * Makes k8 turn right
 */
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
radio.setGroup(42)
basic.forever(function () {
	
})
