
import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion"; //npm i framer-motion


const lotContents = [
    "日出便見風雲散 光明清淨照世間 一向前途通大道 萬事清吉保平安",
    "於今此景正當時 看看欲吐百花魁 若能遇得春色到 一洒清吉脫塵埃",
    "勸君把定心莫虛 天註衣祿自有餘 和合重重常吉慶 時來終遇得明珠",
    "風恬浪靜可行舟 恰是中秋月一輪 凡事不須多憂慮 福祿自有慶家門",
    "只恐前途命有變 勸君作急可宜先 且守長江無大事 命逢太白守身邊",
    "舊恨重重未改為 家中禍患不臨身 須當謹防宜作福 龍蛇交會得和合",

    // 其他籤文內容...
];

const generateLot = (index) => ({
    number: `${index + 1}`,
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

            <div id="all-left">
                {currentLot ? (
                    <div>
                        <h2 style={{ position: "absolute", left: "582px", top: "303px", zIndex: "1", fontSize: "32px" }}>{currentLot.number}</h2> {/* 顯示籤號 */}
                        <img style={{ width: "450px", position: "absolute", left: "200px", top: "100px" }} src="./images/poem.png" alt="" />
                        <p style={{
                            position: "absolute", left: "300px", top: "195px", zIndex: "1", writingMode: "vertical-rl", /* 垂直排列，從右到左 */
                            textOrientation: "upright", /* 每個字元直立顯示 */ whiteSpace: "pre-wrap", width: "250px", height: "270px", fontSize: "26px", letterSpacing: "11px", display: "flex", justifyContent: "center", alignItems: "center",
                        }}>{currentLot.content}</p>   {/* 顯示籤文內容 */}
                    </div>
                ) : (
                    <div>
                        <h1>求籤程式</h1>
                        <p style={{ fontSize: "20px" }}>請按下「抽籤」開始求籤。</p>
                    </div>
                )}
            </div>

            <div id="all-right">
                {!currentLot && (
                    <motion.button
                        onClick={drawLot}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ margin: "30px", fontSize: "20px" }}
                    >
                        抽籤
                    </motion.button>
                )}

                {currentLot && !complete && (
                    <motion.button
                        onClick={throwDivination}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ margin: "30px", fontSize: "20px" }}
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
            </div>

            {/* 動畫展示區域 */}
            <div style={{ margin: "20px 0", width: "33%", height: "300px", position: "relative", border: "1px solid black" }}>
                {isShaking && (
                    <motion.img
                        src="./images/111.png"
                        alt="搖籤筒"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, rotate: [0, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, 0] }}
                        transition={{ duration: 3 }}
                        style={{
                            width: "300px",
                            height: "100%",
                        }}
                    />
                )}

                {isFlipping && (
                    <motion.img
                        src="./images/222.png"
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
    );
});

export default Draw_lots;