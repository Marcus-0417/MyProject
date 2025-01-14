import React, { useEffect, useRef, useState } from 'react';
import '../scss/Temple.scss';
import Carousel from './Carousel';
import History from './History';
import Event from './Event';
import Pray from './Pray';
import Navbar from './Navbar';
import { CSSTransition } from 'react-transition-group';
import Draw_lots from './Draw_lots';
import About from './About';
import GoToTop from './GoToTop';


/* npm install react-transition-group */
/* npm install aos */
/* npm i swiper */
/* npm i react-icons */
/* npm i framer-motion */

export default function Temple() {

  /* 控制Navbar區 */
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const [iconColor, setIconColor] = useState("white");

  const handleToggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  const handleCloseNavbar = () => {
    setIsNavbarVisible(false);
  };

  /* 控制三條線"☰"Navbar顏色 */
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

  /* 控制Navbar點擊後滾動至指定區塊 */
  const carouselRef = useRef(null); // 創建 <Carousel />
  const historyRef = useRef(null); // 創建 <History />
  const eventRef = useRef(null); // 創建 <Event />
  const prayRef = useRef(null); // 創建 <Pray />
  const draw_lotsRef = useRef(null); // 創建 <Draw_lots />
  const aboutRef = useRef(null); // 創建 <About />

  // const scrollToSection = (ref) => {
  //   ref.current.scrollIntoView({ behavior: "smooth" });
  // };

  // /* 設置滾動區 */
  // useEffect(() => {
  //   const sections = document.querySelectorAll('.section');
  //   let currentSection = 0;
  //   let isScrolling = false;

  //   const handleWheel = (event) => {
  //     if (isScrolling) return;

  //     // 當前區塊
  //     const currentElement = sections[currentSection];

  //     if (currentElement.id === 'section-4') {
  //       // 檢查滾動方向
  //       if (event.deltaY > 0) {
  //         // 如果向下滾動並且到達 section-4 的底部，進入下一個區塊
  //         const isBottom = currentElement.getBoundingClientRect().bottom <= window.innerHeight;
  //         if (isBottom) {
  //           currentSection = Math.min(currentSection + 1, sections.length - 1);
  //           sections[currentSection].scrollIntoView({ behavior: 'smooth' });
  //         }
  //       } else {
  //         // 如果向上滾動並且到達 section-4 的頂部，進入上一個區塊
  //         const isTop = currentElement.getBoundingClientRect().top >= 0;
  //         if (isTop) {
  //           currentSection = Math.max(currentSection - 1, 0);
  //           sections[currentSection].scrollIntoView({ behavior: 'smooth' });
  //         }
  //       }
  //       return; // 停止處理，允許自由滾動內部
  //     }

  //     isScrolling = true;

  //     if (event.deltaY > 0) {
  //       currentSection = Math.min(currentSection + 1, sections.length - 1);
  //     } else {
  //       currentSection = Math.max(currentSection - 1, 0);
  //     }

  //     sections[currentSection].scrollIntoView({ behavior: 'smooth' });

  //     setTimeout(() => {
  //       isScrolling = false;
  //     }, 800); // 與滾動動畫時間一致
  //   };

  //   window.addEventListener('wheel', handleWheel);

  //   return () => {
  //     window.removeEventListener('wheel', handleWheel); // 清理事件
  //   };
  // }, []);

  /* 設置滾動區 */
  const currentSectionRef = useRef(0); // 用 useRef 管理 currentSection
  const isScrollingRef = useRef(false); // 用 useRef 管理滾動狀態
  const sections = useRef([]); // 儲存所有區塊

  useEffect(() => {
    sections.current = document.querySelectorAll('.section'); // 初始化區塊
    const handleWheel = (event) => {
      if (isScrollingRef.current) return;

      const currentSection = currentSectionRef.current;
      const currentElement = sections.current[currentSection]; // 當前區塊

      // 特殊處理 section-4 自由滾動
      // 檢查滾動方向
      if (currentElement.id === 'section-4') {
        if (event.deltaY > 0) {
          // 如果向下滾動並且到達 section-4 的底部，進入下一個區塊
          const isBottom = currentElement.getBoundingClientRect().bottom <= window.innerHeight;
          if (isBottom) {
            currentSectionRef.current = Math.min(currentSection + 1, sections.current.length - 1);
            sections.current[currentSectionRef.current].scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // 如果向上滾動並且到達 section-4 的頂部，進入上一個區塊
          const isTop = currentElement.getBoundingClientRect().top >= 0;
          if (isTop) {
            currentSectionRef.current = Math.max(currentSection - 1, 0);
            sections.current[currentSectionRef.current].scrollIntoView({ behavior: 'smooth' });
          }
        }
        return; // 停止處理，允許自由滾動內部
      }

      // 一般滾動邏輯
      isScrollingRef.current = true;
      if (event.deltaY > 0) {
        currentSectionRef.current = Math.min(currentSection + 1, sections.current.length - 1);
      } else {
        currentSectionRef.current = Math.max(currentSection - 1, 0);
      }
      sections.current[currentSectionRef.current].scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800); // 與滾動動畫時間一致
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel); // 清理事件
    };
  }, []);

  const scrollToSection = (ref) => {
    const targetIndex = Array.from(sections.current).findIndex((section) => section === ref.current);

    if (targetIndex !== -1) {
      currentSectionRef.current = targetIndex; // 更新 currentSection
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <main>
        {/* 漢堡按鈕 */}
        <button
          onClick={handleToggleNavbar}
          style={{ color: iconColor }} // 動態設置圖標顏色
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
          <div id="CSSTransition">
            <img id='Stone-Left' src="./images/STONE-2-NBG.webp" alt="" />
            <img id='Moon' src="./images/moon.png" alt="" />
            <img id='Stone-Right' src="./images/STONE-2-NBG.webp" alt="" />

            <Navbar onScrollToSection={(section) => {
              if (section === "carousel") scrollToSection(carouselRef);
              if (section === "history") scrollToSection(historyRef);
              if (section === "event") scrollToSection(eventRef);
              if (section === "pray") scrollToSection(prayRef);
              if (section === "draw_lots") scrollToSection(draw_lotsRef);
              if (section === "about") scrollToSection(aboutRef);
              handleCloseNavbar(); {/* 點擊後關閉Navbar */ }
            }} />
          </div>
        </CSSTransition>

        <Carousel ref={carouselRef} /> {/* 直接綁定 ref */}

        <History ref={historyRef} />

        <Event ref={eventRef} />

        <Pray ref={prayRef} />

        <Draw_lots ref={draw_lotsRef} />

        <About ref={aboutRef} />

        <GoToTop /> {/* 滾動到頂部按鈕 */}
      </main>
    </>
  );
}