// main.js
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('download-btn');

    // Cek jika aplikasi bisa diinstal
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        // Mencegah dialog default dari browser
        e.preventDefault();
        deferredPrompt = e;

        // Tampilkan tombol download
        downloadBtn.style.display = 'block';
    });

    // Ketika tombol diklik
    downloadBtn.addEventListener('click', () => {
        if (deferredPrompt) {
            // Tampilkan prompt install
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                deferredPrompt = null;
            });
        }
    });
});