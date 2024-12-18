import "./App.css";
import React, { useState } from "react";
import { motion } from "framer-motion"; // 引入 Framer Motion

const generateLot = (index) => `第 ${index + 1} 籤: 籤文內容：`;

const App = () => {
  const [lots, setLots] = useState(Array.from({ length: 100 }, (_, i) => generateLot(i)));
  const [currentLot, setCurrentLot] = useState(null);
  const [result, setResult] = useState([]);
  const [complete, setComplete] = useState(false);
  const [isShaking, setIsShaking] = useState(false); // 控制抽籤動畫
  const [isFlipping, setIsFlipping] = useState(false); // 控制擲筊動畫

  const drawLot = () => {
    setIsShaking(true); // 開始搖動動畫
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * lots.length);
      setCurrentLot(lots[randomIndex]);
      setResult([]);
      setComplete(false);
      setIsShaking(false); // 停止搖動動畫
    }, 3000); // 動畫持續 3 秒
  };

  const throwDivination = () => {
    if (!currentLot) return;

    setIsFlipping(true); // 開始翻轉動畫
    setTimeout(() => {
      const outcomes = ["笑筊", "無筊", "聖筊"];
      const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];

      setResult((prev) => {
        const newResult = [...prev, randomOutcome];

        if (randomOutcome === "笑筊" || randomOutcome === "無筊") {
          // 重置狀態並重新擲筊
          alert(`結果為「${randomOutcome}」，請重新抽籤！`);
          setCurrentLot(null);
          setResult([]);
          setIsFlipping(false); // 停止翻轉動畫
          return newResult;
        }

        // 確認是否連續 3 個聖筊
        if (
          newResult.length >= 3 &&
          newResult.slice(-3).every((outcome) => outcome === "聖筊")
        ) {
          setComplete(true);
          alert("恭喜！成功連續擲出三次聖筊，這支籤是對的！");
        }

        setIsFlipping(false); // 停止翻轉動畫
        return newResult;
      });
    }, 1500); // 動畫持續 1.5 秒
  };

  const reset = () => {
    setCurrentLot(null);
    setResult([]);
    setComplete(false);
  };

  return (
    <div id="all" style={{ textAlign: "center", padding: "20px" }}>
      <h1>求籤程式</h1>

      {currentLot ? (
        <div>
          <h2>抽到的籤文:</h2>
          <br />
          <p>{currentLot}</p>
        </div>
      ) : (
        <p>請按下「抽籤」來求籤。</p>
      )}

      {/* 抽籤按鈕及搖籤筒動畫 */}
      {!currentLot && (
        <motion.button
          onClick={drawLot}
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
          // style={{ margin: "10px" }}
        >
          抽籤
        </motion.button>
      )}

      {/* 擲筊按鈕及翻轉動畫 */}
      {currentLot && !complete && (
        <motion.button
          onClick={throwDivination}
          // whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
          // style={{ margin: "10px" }}
        >
          擲筊
        </motion.button>
      )}

      {result.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>擲筊結果:</h3>
          <p>{result.join(", ")}</p>
        </motion.div>
      )}

      {complete && (
        <div>
          <h2 style={{ color: "green" }}>這支籤是要給你的！</h2>
          <motion.button
            onClick={reset}
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.9 }}
            style={{
              margin: "10px",
              backgroundColor: "#f00",
              color: "#fff",
            }}
          >
            重新抽籤
          </motion.button>
        </div>
      )}

      {/* 動畫展示區 */}
      <div style={{ margin: "20px auto", width: "100px", height: "100px", position: "relative" }}>
        {isShaking && (
          <motion.div
            animate={{ rotate: [0, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, 0] }}
            transition={{ duration: 3 }}
            style={{
              width: "100%",
              height: "200px",
              backgroundColor: "#f5f5dc",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            會抽到哪一支籤呢...
          </motion.div>
        )}

        {isFlipping && (
          <motion.div
            animate={{ rotateY: [0, 180, 360, 180, 360, 180, 360, 180, 360, 180, 360, 180, 360, 180, 360] }}
            transition={{ duration: 1.5 }}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#f00",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              perspective: "1000px",
            }}
          >
            擲筊中...
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default App;
