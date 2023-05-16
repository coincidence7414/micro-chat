input.onButtonPressed(Button.A, function () {
    radio.sendString("11")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.forever(function () {
	
})
