// script.js
document.addEventListener('DOMContentLoaded', () => {
    const terminalOutput = document.getElementById('terminal-output');
    const cursor = document.getElementById('cursor');
    
    // ▼▼▼ ここからプロフィール情報を編集してください ▼▼▼
    const profileData = [
        { type: 'header', text: 'SYSTEM BOOT...' },
        { type: 'wait', duration: 1000 },
        { type: 'header', text: 'USER_DATA を読み込んでいます: [Phyllis]' },
        { type: 'wait', duration: 1500 },
        { type: 'line', text: 'アクセスを許可しました。' },
        { type: 'wait', duration: 500 },
        { type: 'clear' },
        { type: 'header', text: '<h2 class="glitch" data-text="-- IDENTIFICATION --">-- IDENTIFICATION --</h2>' },
        { type: 'line', text: '<span class="label">HANDLE:</span> Phyllis' },
        { type: 'line', text: '<span class="label">CLASS:</span> アプリ開発者  / プログラマー (趣味)' },
        { type: 'line', text: '<span class="label">STATUS:</span> ONLINE // データを分析しています...' },
        { type: 'wait', duration: 1000 },
        { type: 'header', text: '<h2>-- SKILLS --</h2>' },
        { type: 'list', items: ['アプリ開発 / AIプログラミング', 'ホームページ', 'オーディオ', 'PA機材', 'youtube配信セット', 'PV作成', '動画編集', 'チラシ', '名刺', '業務システム開発', 'ホームシアター'] },
        { type: 'wait', duration: 1000 },
        { type: 'header', text: '<h2>-- PROJECTS --</h2>' },
        { type: 'list', items: ['Project Alpha: [AIプログラミング]', 'Project Beta: [アプリ制作]'] },
        { type: 'wait', duration: 1000 },
        { type: 'header', text: '<h2>-- CONTACT --</h2>' },
        { type: 'line', text: 'GitHub: <a href="https://github.com/" target="_blank">hirotakou54277</a>' },
        { type: 'line', text: 'X (Twitter): <a href="https://twitter.com/" target="_blank">your-twitter-id</a>' },
        { type: 'wait', duration: 500 },
        { type: 'line', text: 'READY.' },
        { type: 'line', text: '<br><a href="index.html" class="back-link">> 戻る</a>' }
    ];
    // ▲▲▲ プロフィール情報の編集はここまで ▲▲▲

    let lineIndex = 0;
    
    function processNextLine() {
        if (lineIndex >= profileData.length) {
            cursor.style.display = 'inline-block'; // 最後にカーソルを表示
            return;
        }

        cursor.style.display = 'none'; // 処理中はカーソルを非表示
        const data = profileData[lineIndex];

        switch (data.type) {
            case 'header':
            case 'line':
                typeLine(data.text, () => {
                    lineIndex++;
                    processNextLine();
                });
                break;
            case 'list':
                typeList(data.items, () => {
                    lineIndex++;
                    processNextLine();
                });
                break;
            case 'wait':
                setTimeout(() => {
                    lineIndex++;
                    processNextLine();
                }, data.duration);
                break;
            case 'clear':
                terminalOutput.innerHTML = '';
                lineIndex++;
                processNextLine();
                break;
        }
    }

    function typeLine(text, callback) {
        const p = document.createElement('p');
        p.innerHTML = '&nbsp;'; // 最初は空で高さを確保
        terminalOutput.appendChild(p);
        
        let charIndex = 0;
        const typingSpeed = 30; // 文字のタイピング速度 (ミリ秒)

        function typeChar() {
            if (charIndex < text.length) {
                p.innerHTML = text.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeChar, typingSpeed);
            } else {
                if (callback) callback();
            }
        }
        typeChar();
    }
    
    function typeList(items, callback) {
        const ul = document.createElement('ul');
        terminalOutput.appendChild(ul);
        let itemIndex = 0;
        
        function typeNextItem() {
            if (itemIndex < items.length) {
                const li = document.createElement('li');
                ul.appendChild(li);
                typeListItem(items[itemIndex], li, typeNextItem);
                itemIndex++;
            } else {
                if (callback) callback();
            }
        }
        typeNextItem();
    }

    function typeListItem(text, element, callback) {
        let charIndex = 0;
        const typingSpeed = 20;

        function typeChar() {
            if (charIndex < text.length) {
                element.innerHTML = text.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeChar, typingSpeed);
            } else {
                if (callback) callback();
            }
        }
        typeChar();
    }

    processNextLine();

});




