// videos_script_v2.js (全面的に書き換え)
document.addEventListener('DOMContentLoaded', () => {
    const mainVideo = document.getElementById('main-video'); // これはiframeを指すようになります
    const videoTitle = document.getElementById('video-title');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // 最初に表示する動画のタイトルを設定
    const firstThumbnail = document.querySelector('.thumbnail');
    if (firstThumbnail) {
        videoTitle.textContent = firstThumbnail.getAttribute('data-title');
    }

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const videoId = thumbnail.getAttribute('data-video');
            const title = thumbnail.getAttribute('data-title');

            // YouTubeの埋め込み用URLを生成
            const newSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&controls=1`;

            // iframeのsrcを新しいURLに設定して動画を切り替える
            mainVideo.src = newSrc;
            
            // タイトルを更新
            videoTitle.textContent = title;
        });
    });
});
