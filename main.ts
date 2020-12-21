function testMotor () {
    Motor(100, 0)
    basic.pause(1000)
    Motor(-100, 0)
    basic.pause(1000)
    Motor(0, 100)
    basic.pause(1000)
    Motor(0, -100)
    basic.pause(1000)
}
function Motor (SpeedL: number, SpeedR: number) {
    robotbit.MotorRunDual(
    robotbit.Motors.M2B,
    Math.map(SpeedL, -100, 100, -255, 255),
    robotbit.Motors.M1A,
    Math.map(SpeedR, -100, 100, -255, 255)
    )
}
basic.forever(function () {
    testMotor()
})
