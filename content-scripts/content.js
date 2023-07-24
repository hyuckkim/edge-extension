if (window.history.length == 1) {
    const BACK_BUTTON_CODE = 8
    var recordedButtons = 0

    document.addEventListener('mousedown', (e) => {
        recordedButtons = e.buttons
    });
    document.addEventListener('mouseup', (e) => {
        if ((recordedButtons - e.buttons) == BACK_BUTTON_CODE) {
            window.close()
        }
        recordedButtons = e.buttons
    });
}