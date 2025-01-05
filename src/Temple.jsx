import React, { useEffect, useRef, useState } from 'react';
import '../scss/Temple.scss';
import Carousel from './Carousel';
import History from './History';
import Event from './Event';
import Pray from './Pray';
import Navbar from './Navbar';

export default function Temple() {



  /* 控制Navbar區 */
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleToggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  const handleCloseNavbar = () => {
    setIsNavbarVisible(false);
  };

  /* 控制滾動至指定區塊 */
  const carouselRef = useRef(null); // 創建 <Carousel />
  const historyRef = useRef(null); // 創建 <History />
  const eventRef = useRef(null); // 創建 <Event />
  const prayRef = useRef(null); // 創建 <Pray />

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  /* 設置滾動區 */
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;
    let isScrolling = false;

    const handleWheel = (event) => {
      if (isScrolling) return;

      if (currentSection === sections.length - 1 && event.deltaY > 0) {
        // 如果已經在最後一個區塊並且滾動方向向下，停止滾動效果
        return;
      }

      isScrolling = true;

      if (event.deltaY > 0) {
        currentSection = Math.min(currentSection + 1, sections.length - 1);
      } else {
        currentSection = Math.max(currentSection - 1, 0);
      }

      sections[currentSection].scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        isScrolling = false;
      }, 800); // 與滾動動畫時間一致
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel); // 清理事件
    };
  }, []);

  return (
    <>
      <main>
        {/* 漢堡按鈕 */}
        <button
          onClick={handleToggleNavbar}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "36px",
            position: "fixed",
            top: "30px",
            right: "30px",
            zIndex: 1100,
            color: "white",
          }}
        >
          {isNavbarVisible ? "✖" : "☰"} {/* 漢堡圖標 or 打叉 */}
        </button>

        {/* Navbar 彈窗 */}

        {isNavbarVisible && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // 半透明背景
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "500px",
                height: "100vh",
                backgroundColor: "#000000",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Navbar onScrollToSection={(section) => {
                if (section === "carousel") scrollToSection(carouselRef);
                if (section === "history") scrollToSection(historyRef);
                if (section === "event") scrollToSection(eventRef);
                if (section === "pray") scrollToSection(prayRef);
                handleCloseNavbar();
              }} /> {/* 點擊後關閉Navbar */}
            </div>
          </div>
        )}

        <Carousel ref={carouselRef} />

        <History ref={historyRef} /> {/* 直接綁定 ref */}

        <Event ref={eventRef} />

        <Pray ref={prayRef}/>
      </main>
    </>
  );
}