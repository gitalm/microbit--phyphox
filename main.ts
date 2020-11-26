bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.startUartService()
basic.forever(function () {
    bluetooth.uartWriteLine("" + input.rotation(Rotation.Pitch) + ";" + pins.analogReadPin(AnalogPin.P0) + ";")
})
