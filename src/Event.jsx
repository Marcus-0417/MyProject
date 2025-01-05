import React, { forwardRef, useEffect, useRef } from "react";


const Event = forwardRef((props, ref) => {

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: 0, behavior: "auto" }); // 確保初始滾動位置為最左側
    }
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollBy({ left: -400, behavior: "smooth" }); // 每次滾動一個 Event-box 的寬度
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollBy({ left: 400, behavior: "smooth" }); // 每次滾動一個 Event-box 的寬度
    }
  };

  return (
    <>
      <div id="section-3" className="section" ref={ref}>
        <div className="Event-wrapper">
          <button className="scroll-button left" onClick={scrollLeft}>
            &lt;
          </button>
          <div id="Event-Container" className="scroll-container" ref={containerRef}>
            <div className="Event-box">
              <img src="./images/IMG_8328.jpg" alt="" />
              <h3>1</h3>
              <p>
                好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠
              </p>
            </div>
            <div className="Event-box">
              <img src="../images/IMG_8371.jpg" alt="" />
              <h3>2</h3>
              <p>
                好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠
              </p>
            </div>
            <div className="Event-box">
              <img src="../images/IMG_8366.jpg" alt="" />
              <h3>3</h3>
              <p>
                好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠
              </p>
            </div>
            <div className="Event-box">
              <img src="../images/IMG_8366.jpg" alt="" />
              <h3>4</h3>
              <p>
                好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠
              </p>
            </div>
            <div className="Event-box">
              <img src="../images/IMG_8366.jpg" alt="" />
              <h3>5</h3>
              <p>
                好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠好多燈籠
              </p>
            </div>
          </div>
          <button className="scroll-button right" onClick={scrollRight}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
});

export default Event;