document.addEventListener('DOMContentLoaded', () => {
    const mainVideo = document.getElementById('main-video');
    const videoTitle = document.getElementById('video-title');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const videoSrc = thumbnail.getAttribute('data-video');
            const title = thumbnail.getAttribute('data-title');

            mainVideo.src = videoSrc;
            videoTitle.textContent = title;
            mainVideo.load();
            mainVideo.play();
        });
    });

    // 初期表示として最初のサムネイルの情報をロード
    const firstThumbnail = thumbnails.length > 0 ? thumbnails.item(0) : null;
    if (firstThumbnail) {
        const videoSrc = firstThumbnail.getAttribute('data-video');
        const title = firstThumbnail.getAttribute('data-title');
        mainVideo.src = videoSrc;
        videoTitle.textContent = title;
        mainVideo.load();
        // autoplay しているのでここでは play() は不要
    }
});