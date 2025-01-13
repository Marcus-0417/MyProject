
import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion"; //npm i framer-motion


const lotContents = [
    "一帆風順，萬事如意。",
    "山重水復疑無路，柳暗花明又一村。",
    "凡事莫強求，順其自然。",
    "得此籤者，福祿雙全。",
    "貴人相助，前途光明。",
    // 其他籤文內容...
];

const generateLot = (index) => ({
    number:  `${index + 1}`,
    content: lotContents[index] || "籤文缺失",
});

const Draw_lots = forwardRef((props, ref) => {
    const [lots, setLots] = useState(Array.from({ length: lotContents.length }, (_, i) => generateLot(i)));
    const [currentLot, setCurrentLot] = useState(null);
    const [result, setResult] = useState([]);
    const [complete, setComplete] = useState(false);
    const [isShaking, setIsShaking] = useState(false); // 控制搖籤筒動畫
    const [isFlipping, setIsFlipping] = useState(false); // 控制擲筊翻轉動畫

    const drawLot = () => {
        setIsShaking(true); // 顯示搖籤筒動畫
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * lots.length);
            setCurrentLot(lots[randomIndex]);
            setResult([]);
            setComplete(false);
            setIsShaking(false); // 停止搖籤筒動畫
        }, 3000); // 動畫持續 3 秒
    };

    const throwDivination = () => {
        if (!currentLot) return;

        setIsFlipping(true); // 顯示擲筊翻轉動畫
        setTimeout(() => {
            const outcomes = ["笑筊", "無筊", "聖筊"];
            const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];

            setResult((prev) => {
                const newResult = [...prev, randomOutcome];

                if (randomOutcome === "笑筊" || randomOutcome === "無筊") {
                    alert(`結果為「${randomOutcome}」，請重新抽籤！`);
                    setCurrentLot(null);
                    setResult([]);
                    setIsFlipping(false); // 停止擲筊翻轉動畫
                    return newResult;
                }

                if ( /* 檢查是否連續擲出三次聖筊，原本應是3，但因展示先改為1 */
                    newResult.length >= 1 &&
                    newResult.slice(-1).every((outcome) => outcome === "聖筊")
                ) {
                    setComplete(true);
                    alert("恭喜！成功連續擲出三次聖筊，這支籤是對的！");
                }

                setIsFlipping(false); // 停止擲筊翻轉動畫
                return newResult;
            });
        }, 2000); // 動畫持續 2 秒
    };

    const reset = () => {
        setCurrentLot(null);
        setResult([]);
        setComplete(false);
    };

    return (
        <div id="section-5" className="section" ref={ref}>
            <div id="all" style={{ textAlign: "center", position: "relative" }}>
                <h1 style={{ marginTop: "160px" }}>求籤程式</h1>

                {currentLot ? (
                    <div>
                        <h2 style={{position: "absolute", left: "582px", top: "303px",zIndex:"1", fontSize:"32px"}}>{currentLot.number}</h2> {/* 顯示籤號 */}
                        <img style={{ width: "450px", position: "absolute", left: "200px", top: "100px"}} src="./images/poem.png" alt="" />
                        <p style={{position: "absolute", left: "350px", top: "320px",zIndex:"1"}}>{currentLot.content}</p>   {/* 顯示籤文內容 */}
                    </div>
                ) : (
                    <p style={{ fontSize: "20px" }}>請按下「抽籤」開始求籤。</p>
                )}

                {!currentLot && (
                    <motion.button
                        onClick={drawLot}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ margin: "36px", fontSize:"20px" }}
                    >
                        抽籤
                    </motion.button>
                )}

                {currentLot && !complete && (
                    <motion.button
                        onClick={throwDivination}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ margin: "36px", fontSize:"20px" }}
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
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
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

                {/* 動畫展示區域 */}
                <div style={{ margin: "20px auto", width: "300px", height: "300px", position: "relative" }}>
                    {isShaking && (
                        <motion.img
                            src="./images/111.png" // 使用 public/images 中的搖籤筒圖片
                            alt="搖籤筒"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, rotate: [0, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, 0] }}
                            transition={{ duration: 3 }}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    )}

                    {isFlipping && (
                        <motion.img
                            src="./images/222.png" // 使用 public/images 中的擲筊圖片
                            alt="擲筊翻轉"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, rotateY: [0, 180, 360, 180, 360, 180, 360, 180, 360, 180, 360, 180, 360, 180, 360] }}
                            transition={{ duration: 2 }}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
});

export default Draw_lots;