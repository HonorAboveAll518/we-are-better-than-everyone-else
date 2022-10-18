"""

Makes the k8 stop moving

"""

def on_gesture_tilt_left():
    radio.send_number(1)
    basic.show_leds("""
        . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
    """)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_ab():
    radio.send_number(4)
    basic.show_leds("""
        # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
    """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

"""

Makes the k8 turn left

"""
"""

Makes the k8 move forward

"""

def on_gesture_shake():
    radio.send_number(3)
    basic.show_leds("""
        . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
    """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

"""

Makes k8 turn right

"""

def on_gesture_tilt_right():
    radio.send_number(2)
    basic.show_leds("""
        . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
    """)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

radio.set_group(42)

def on_forever():
    pass
basic.forever(on_forever)
