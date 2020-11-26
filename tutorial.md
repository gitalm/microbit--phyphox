```package
bluetooth
```
# Micro:Bit & Phyphox ☀️⚡

## Einführung @unplugged

Lerne wie man den @boardname@ mit Phyphox via Bluetooth verknüpft und die Daten einer Photovoltaikzelle analysiert.

## Bluetooth aktivieren @fullscreen

Klicke auf (+)  ``||advanced:extension:bluetooth||`` und füge Bluetooth dazu. Dabei musst du die Auswahl bestätigen, da der @boardname@ entweder per 
Bluetooth statt Radio kommunizieren wird. 

## Verbindungskontrolle  ✔️

Um zu Kontrollieren, ob der @boardname@ verbunden ist, fügen wir einen ``||bluetooth:onBluetoothConnected||``
melden mit einem Bild ``||basic:showIcon||`` das erfolgreiche Verbinden zurück.

```blocks
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
```

## Verbindungskontrolle  ❌

Look at the virtual @boardname@, you should see the heart and your drawing blink on the screen.
```blocks
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
```
## Bluetoothservice starten

```blocks
bluetooth.startUartService()
```
## Daten senden 

```blocks
basic.forever(function () {
    bluetooth.uartWriteLine("")
})
```

## Installieren auf dem @boardname@

Klicke auf ``||download||``, um dein Programm auf deinen @boardname@ zu übertragen!
