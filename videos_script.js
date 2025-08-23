// videos_script.js
document.addEventListener('DOMContentLoaded', () => {
    const mainVideo = document.getElementById('main-video');
    const videoTitle = document.getElementById('video-title');
    const thumbnails = document.querySelectorAll('.thumbnail-item');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // 現在の 'active' クラスを削除
            document.querySelector('.thumbnail-item.active').classList.remove('active');

            // クリックされたサムネイルに 'active' クラスを追加
            thumbnail.classList.add('active');

            // メインビデオのソースとタイトルを更新
            const videoSrc = thumbnail.getAttribute('data-video-src');
            const newTitle = thumbnail.getAttribute('data-video-title');
            
            mainVideo.src = videoSrc;
            videoTitle.textContent = newTitle;
            
            mainVideo.load(); // 新しいソースをロード
            mainVideo.play(); // 再生
        });
    });
});