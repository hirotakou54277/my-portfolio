document.addEventListener('DOMContentLoaded', () => {
    const linksContainer = document.getElementById('links-container');
    
    // ▼▼▼ 表示したいリンクをここに設定 ▼▼▼
    const linksData = [
        { url: 'https://github.com/hirotakou54277', text: '// GITHUB_REPOSITORY_ACCESS...' },
        { url: 'https://www.youtube.com/playlist?list=PL0SurqBETkzZmYUy8uNZXabc8bqGBkJkt', text: '// YouTubeのリスト1...' },
        { url: 'https://www.youtube.com/playlist?list=PL0SurqBETkzbsNlJLgo67ZcQjrl8-P5bA', text: '// YouTubeのリスト2...' },
        { url: 'https://open.spotify.com/user/h1yf3imyfwj6kz107ktmwna4z?si=fd2d2b73bb074a27', text: '// Spotifyのプレイリスト...' },
        // { url: '...', text: '...' }, // この行をコピーしてリンクを追加
    ];
    // ▲▲▲ ここまで ▲▲▲

    let linkIndex = 0;
    const typingSpeed = 40; // タイピングの速さ (ミリ秒)
    const lineDelay = 400;  // 次の行が表示されるまでの待ち時間 (ミリ秒)

    function typeNextLink() {
        if (linkIndex >= linksData.length) {
            return; // 全てのリンクを表示したら終了
        }

        const linkInfo = linksData[linkIndex];
        const linkElement = document.createElement('a');
        linkElement.href = linkInfo.url;
        linkElement.target = "_blank"; // リンクを新しいタブで開く
        linkElement.textContent = ''; // 最初は空
        linksContainer.appendChild(linkElement);

        let charIndex = 0;
        function typeCharacter() {
            if (charIndex < linkInfo.text.length) {
                linkElement.textContent += linkInfo.text.charAt(charIndex);
                charIndex++;
                setTimeout(typeCharacter, typingSpeed);
            } else {
                // 1つのリンクのタイピングが完了
                linkIndex++;
                setTimeout(typeNextLink, lineDelay); // 次のリンクへ
            }
        }
        
        typeCharacter();
    }

    // 最初のリンクのタイピングを開始
    typeNextLink();
});