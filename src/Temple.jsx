import React, { useEffect, useRef, useState } from 'react';
import '../scss/Temple.scss';
import Carousel from './Carousel';
import History from './History';
import Event from './Event';
import Pray from './Pray';
import Navbar from './Navbar';
import { CSSTransition } from 'react-transition-group';

/* npm install react-transition-group */
/* npm install aos */
/* npm i swiper */

export default function Temple() {


  /* 控制Navbar區 */
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const [iconColor, setIconColor] = useState("black");

  const handleToggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  const handleCloseNavbar = () => {
    setIsNavbarVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const carouselHeight = carouselRef.current.offsetHeight;

      if (scrollY < carouselHeight) {
        setIconColor("white"); // 淺色背景的深色圖標
      } else {
        setIconColor("black"); // 深色背景的淺色圖標
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            color: iconColor, // 動態設置圖標顏色
          }}
        >
          {isNavbarVisible ? "✖" : "☰"} {/* 漢堡圖標 or 打叉 */}
        </button>

        {/* Navbar 彈窗 */}

        <CSSTransition
          in={isNavbarVisible}
          timeout={500}
          classNames="navbar-transition"
          unmountOnExit
        >
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <img style={{ position: "fixed", bottom: 0, left: 0, width: "30%", height: "auto", objectFit: "cover" }} src="../images/STONE-2-NBG.png" alt="" />
            <img style={{ position: "fixed", opacity: "0.5", transform: "translate(-50%, 50%)", bottom: "50%", left: "50%", width: "38%", height: "auto", objectFit: "cover", zIndex: "-1" }} src="../images/moon.png" alt="" />
            <Navbar onScrollToSection={(section) => {
              if (section === "carousel") scrollToSection(carouselRef);
              if (section === "history") scrollToSection(historyRef);
              if (section === "event") scrollToSection(eventRef);
              if (section === "pray") scrollToSection(prayRef);
              handleCloseNavbar(); {/* 點擊後關閉Navbar */}
            }} />
            <img style={{ position: "fixed", bottom: 0, right: 0, width: "30%", height: "auto", objectFit: "cover", transform: "scaleX(-1)" }} src="../images/STONE-2-NBG.png" alt="" />
          </div>
        </CSSTransition>

        <Carousel ref={carouselRef} /> {/* 直接綁定 ref */}

        <History ref={historyRef} /> 

        <Event ref={eventRef} />

        <Pray ref={prayRef} />
      </main>
    </>
  );
}