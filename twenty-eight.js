led.enable(true)
let wave = [
    [0, 4],            //used basic spiral code on gist
    [0, 3], [1, 4],      //customized array to create "wave" pattern
    [1, 3], [2, 4], [0, 2],
    [1, 2], [2, 3], [0, 1], [3, 4],
    [2, 2], [3, 3], [1, 1], [4, 4], [0, 0],
    [2, 1], [3, 2], [1, 0], [4, 3],
    [3, 1], [4, 2], [2, 0],
    [3, 0], [4, 1],
    [4, 0]
]
basic.forever(function () {
    for (let w = 0; w < 25; w++) {
        led.plot(wave[w][0], wave[w][1])
        basic.pause(50)       //changed timing to flow better
    }
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P8, 1023)
    basic.pause(400)
    pins.analogWritePin(AnalogPin.P12, 1023)
    basic.pause(400)
    pins.analogWritePin(AnalogPin.P16, 1023)
    for (let w = 0; w < 25; w++) {
        led.unplot(wave[w][0], wave[w][1])
        basic.pause(50)
    }
    basic.pause(200)
    pins.analogWritePin(AnalogPin.P16, 0)
    basic.pause(400)
    pins.analogWritePin(AnalogPin.P12, 0)
    basic.pause(400)
    pins.analogWritePin(AnalogPin.P8, 0)
    basic.pause(200)
})
