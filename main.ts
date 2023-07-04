input.onButtonPressed(Button.A, function () {
    led.unplot(katinax, katonay)
    if (katinax < menedekx) {
        katinax += 1
    }
    ralepett()
})
function siker () {
    if (led.point(menedekx, menedeky)) {
        for (let index = 0; index < 5; index++) {
            led.unplot(menedekx, menedeky)
            basic.pause(200)
            led.plot(menedekx, menedeky)
        }
        basic.clearScreen()
        basic.showString("brawo")
        basic.showIcon(IconNames.Happy)
        szint += 1
        basic.showNumber(szint)
        indul()
    }
}
function aknamezo () {
    for (let oszlop = 0; oszlop <= 2; oszlop++) {
        for (let sor = 0; sor <= 4; sor++) {
            veletlen = randint(0, 2)
            if (veletlen == 0) {
                led.plotBrightness(oszlop + 1, sor, 130)
            }
        }
    }
}
input.onButtonPressed(Button.B, function () {
    led.unplot(katinax, katonay)
    if (katonay < menedeky) {
        katonay += 1
    }
    ralepett()
})
function ralepett () {
    if (led.point(katinax, katonay)) {
        basic.clearScreen()
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(500)
        basic.showIcon(IconNames.Sad)
    } else {
        led.plot(katinax, katonay)
    }
}
function indul () {
    basic.pause(500)
    basic.clearScreen()
    katinax = 0
    katonay = 0
    led.plot(katinax, katonay)
    aknamezo()
}
let veletlen = 0
let katonay = 0
let katinax = 0
let menedeky = 0
let menedekx = 0
let szint = 0
szint = 0
indul()
menedekx = 4
menedeky = 4
basic.forever(function () {
    basic.pause(1000)
    siker()
})
