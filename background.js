const canvas = document.getElementById("back-canvas");
const starCtx = canvas.getContext("2d");
resizeCanvas();

// 円を描画する
function drawStar(x, y, size, color) {
    starCtx.beginPath();
    starCtx.fillStyle = color == 0 ? "rgb(231, 231, 252)" : "rgb(252, 231, 231)";
    starCtx.arc(x - size / 2, y - size / 2, size, 0, 180);
    starCtx.fill();
    starCtx.closePath();
}

// 星の情報 (x, y, size, time)
const stars = [];

// 星をランダムな位置から生成
for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 30;
    const time = Math.random() * 2 * Math.PI;
    const color = Math.random() < 0.5 ? 0 : 1;

    stars.push({ x, y, size, time, color });
}

// アニメーションのループ
function animate() {
    requestAnimationFrame(animate);
    starCtx.clearRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {
        star.y += 1;
        star.time += 0.001;

        drawStar(star.x + Math.sin(star.time) * 100, star.y, star.size, star.color);

        if (star.y > canvas.height + star.size * 2) {
            star.y = 0;
        }
    }
}

animate();

// canvasのリサイズ
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);