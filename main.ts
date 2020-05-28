let goal = 0
let score = 0
basic.showNumber(score)
basic.pause(100)
basic.forever(function () {
    goal = pins.digitalReadPin(DigitalPin.P0)
    if (goal == 1) {
        score = score + 1
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showNumber(score)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (input.buttonIsPressed(Button.A)) {
        score = 0
        goal = 0
        basic.showNumber(score)
    }
})
