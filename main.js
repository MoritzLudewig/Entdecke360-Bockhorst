
function goFullscreen() {
    const iframe = document.getElementById('meinIframe');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari und Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // Internet Explorer/Edge
        iframe.msRequestFullscreen();
    }
}
