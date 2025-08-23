// projects_script.js
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    // Intersection Observerのオプション
    const options = {
        root: null, // ビューポートを基準にする
        rootMargin: '0px',
        threshold: 0.1 // 10%見えたらトリガー
    };

    // コールバック関数
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // 要素がビューポートに入ったら
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // 一度表示したら監視を停止
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // 各カードを監視対象に追加
    projectCards.forEach(card => {
        observer.observe(card);
    });
});