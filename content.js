const domLoaded = () => {
    document.body.onkeydown = e => {
        const videos = document.getElementsByTagName('video');

        if (videos.length > 0) {
            const video = videos[0];

            const seek = time => {
                e.stopImmediatePropagation();
                video.currentTime += time;
            }

            switch (e.key) {
                case 'ArrowRight':
                    seek(10);
                    break;
                case 'ArrowLeft':
                    seek(-10);
                    break;
                default:
                    break;
            }
        }
    }
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(domLoaded, 1);
} else {
    document.addEventListener("DOMContentLoaded", domLoaded);
}