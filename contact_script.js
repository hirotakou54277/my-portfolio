// contact_script.js
const form = document.getElementById('contact-form');
const statusDiv = document.getElementById('form-status');
const submitButton = document.getElementById('submit-button');

// タイピング風にテキストを表示する関数
function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.innerHTML = "";
    element.style.display = "block";

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

async function handleSubmit(event) {
    event.preventDefault(); // デフォルトのフォーム送信をキャンセル
    
    // 送信中はボタンを無効化
    submitButton.disabled = true;

    // 送信中のモーション（タイピングアニメーション）
    statusDiv.className = '';
    typeWriter(statusDiv, " > Establishing secure connection... DATA PACKET TRANSMITTING...", 50, null);

    const data = new FormData(event.target);
    try {
        const response = await fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // 成功した場合のモーション
            statusDiv.className = 'success';
            typeWriter(statusDiv, " > TRANSMISSION COMPLETE. // STANDBY FOR RESPONSE.", 50, () => {
                form.reset(); // フォームをリセット
                submitButton.disabled = false; // ボタンを再度有効化
            });
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        // エラーが発生した場合のモーション
        statusDiv.className = 'error';
        typeWriter(statusDiv, " > TRANSMISSION FAILED. // CONNECTION INTERRUPTED. CHECK CONSOLE.", 50, () => {
            submitButton.disabled = false; // ボタンを再度有効化
        });
    }
}

form.addEventListener("submit", handleSubmit);