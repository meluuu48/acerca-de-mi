/* llamado al boton*/

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkboxInput');
    const audioPlayer = document.getElementById('audioPlayer');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });
});

function descargarCV() {
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
