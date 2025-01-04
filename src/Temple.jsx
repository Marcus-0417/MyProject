import React, { useEffect, useState } from 'react';
import '../scss/Temple.scss';
import Carousel from './Carousel';
import History from './History';
import Event from './Event';

export default function Temple() {

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
          <div id="section-1" className="section"><Carousel /></div>
  
          <div id="section-2" className="section"><History /></div>
  
          <div id="section-3" className="section"><Event /></div>
  
          <div id="section-4" className="section"></div>
        </main>
      </>
    );
  }