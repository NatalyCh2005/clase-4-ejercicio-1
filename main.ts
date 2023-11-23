basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (input.buttonIsPressed(Button.B)) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (input.buttonIsPressed(Button.A)) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
