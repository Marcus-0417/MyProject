import "./App.css"
import React, { useState } from 'react';

const generateLot = (index) => `第 ${index + 1} 籤: 籤文內容：`;

const App = () => {
  const [lots, setLots] = useState(Array.from({ length: 100 }, (_, i) => generateLot(i)));
  const [currentLot, setCurrentLot] = useState(null);
  const [result, setResult] = useState([]);
  const [complete, setComplete] = useState(false);

  const drawLot = () => {
    const randomIndex = Math.floor(Math.random() * lots.length);
    setCurrentLot(lots[randomIndex]);
    setResult([]);
    setComplete(false);
  };

  const throwDivination = () => {
    if (!currentLot) return;

    const outcomes = ['笑筊', '無筊', '聖筊'];
    const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];

    setResult((prev) => {
      const newResult = [...prev, randomOutcome];

      if (randomOutcome === '笑筊' || randomOutcome === '無筊') {
        // 重置狀態並重新擲筊
        alert(`結果為「${randomOutcome}」，請重新抽籤！`);
        setCurrentLot(null);
        setResult([]);
        return newResult;
      }

      // 確認是否連續3個聖筊
      if (
        newResult.length >= 3 &&
        newResult.slice(-3).every((outcome) => outcome === '聖筊')
      ) {
        setComplete(true);
        alert('恭喜！成功連續擲出三次聖筊，這支籤是對的！');
      }

      return newResult;
    });
  };

  const reset = () => {
    setCurrentLot(null);
    setResult([]);
    setComplete(false);
  };

  return (
    <div id="all">
      <h1>求籤程式</h1>
      {currentLot ? (
        <div>
          <h2>抽到的籤文:</h2>
          <p>{currentLot}</p>
        </div>
      ) : (
        <p>請按下「抽籤」來求籤。</p>
      )}

      {!currentLot && (
        <button onClick={drawLot}>
          <span>抽籤</span>
        </button>
      )}
      {currentLot && !complete && (
        <button onClick={throwDivination}>
         <span>擲筊</span>
        </button>
      )}
      {result.length > 0 && (
        <div>
          <h3>擲筊結果:</h3>
          <p>{result.join(', ')}</p>
        </div>
      )}
      {complete && (
        <div>
          <h2 style={{ color: 'green' }}>這支籤是要給你的！</h2>
          <button onClick={reset} style={{ margin: '10px', backgroundColor: '#f00', color: '#fff' }}>
            重新抽籤
          </button>
        </div>
      )}
    </div>
  );
};

export default App;