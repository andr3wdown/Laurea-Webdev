const BUTTON_ID = 'popup-button';
const CLOSE_ID = 'close-button';
const POPUP_ID = 'modal';

for(let i = 0; i < 9; i++) {
    let open = document.getElementById(BUTTON_ID + i);
    let close = document.getElementById(CLOSE_ID + i);
    let popup = document.getElementById(POPUP_ID + i);

    open.addEventListener('click', () => {
        popup.showModal();
    });
    close.addEventListener('click', () => {
        let div = document.getElementById("video-container" + i);
        let iframe = div.getElementsByTagName("iframe")[0].contentWindow;
        iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        popup.close();
    });
}
