import { useRef, useEffect } from 'react';

const MouseTracker = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 載入並顯示背景圖片
    const bgImage = new Image();
    bgImage.src = '../images/background.jpg';
    bgImage.onload = () => {
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
    };

    // 追蹤滑鼠移動
    let lastMousePos = { x: 0, y: 0 };
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const currentMousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };

      // 繪製滑鼠軌跡
      drawMouseTrail(ctx, currentMousePos);

      // 更新最後一次記錄的滑鼠位置
      lastMousePos = currentMousePos;
    });

    // 處理 Canvas 尺寸調整
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
    };
    window.addEventListener('resize', handleResize);

    // 清理事件監聽器
    return () => {
      canvas.removeEventListener('mousemove', () => {});
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const drawMouseTrail = (ctx, mousePos) => {
    // 在當前滑鼠位置繪製一個小圓點或小圓圈
    ctx.beginPath();
    ctx.arc(mousePos.x, mousePos.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'transparent';
    ctx.fill();
  };

  return (
    <canvas
      id="myCanvas"
      width={window.innerWidth}
      height={window.innerHeight}
      ref={canvasRef}
    />
  );
};

export default MouseTracker;