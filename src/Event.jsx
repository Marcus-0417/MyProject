import React, { forwardRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Event = forwardRef((props, ref) => {

  return (
    <>
      <div id="section-3" className="section" ref={ref}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 500,
            modifier: 3,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="Event-wrapper"
        >
          <SwiperSlide className="Event-box">
              <img src="./images/IMG_8329.webp" alt="" />
              <h3>諸羅城十六境</h3>
              <p>
                在清代，台灣的大城市或比較熟鬧的街市，因居民眾多，其祖籍及信仰也有差異，因此民間自行規劃分區，以作為各寺廟勢力範圍的依據。
                這種做法乃源自於福建，在元代就有相關記載，各境各有其角頭，較大的廟可以管轄數境。
              </p>
          </SwiperSlide>
          <SwiperSlide className="Event-box">
              <img src="./images/IMG_8331.webp" alt="" />
              <h3>關廂境</h3>
              <p>
                位於中央第二商場內，一樓奉祀福德正神、文財神、武財神，二樓奉祀關聖帝君、呂仙祖、灶神。關廂境廟已有2、3百年歷史，全廟的神尊都是財神，是市中心的財神古廟。
              </p>
          </SwiperSlide>
          <SwiperSlide className="Event-box">
              <img src="./images/IMG_8328.webp" alt="" />
              <h3>燈籠</h3>
              <p>
                圖中可以看到許多鮮紅色的燈籠懸掛於屋頂下，每個燈籠上都有金色的字體和吊飾，營造出喜慶的氛圍。畫面的右側還能看到一些螺旋狀的線香吊掛，為關廂境廟的特色。
              </p>
          </SwiperSlide>
          <SwiperSlide className="Event-box">
              <img src="./images/IMG_8371.webp" alt="" />
              <h3>【南天文衡聖帝】</h3>
              <p>
                （頭戴帝冠，身穿青色龍袍，手持奏板的關聖帝君代表當前玄靈高上帝 玉皇大天
                尊此乃是關聖帝君現玉帝之相）
                聖誕：農曆六月二十四日生日（財神）
                得道昇天：農曆一月十三日（財神）
              </p>
          </SwiperSlide>
          <SwiperSlide className="Event-box">
              <img src="./images/IMG_8366.webp" alt="" />
              <h3>香環</h3>
              <p>
              這張照片展示了廟宇內部的「香環」景象，這些螺旋狀的線香以其獨特的形態整齊地吊掛在天花板上。香環通常是用於祈福或還願的傳統供奉方式，燃燒時間長，煙霧緩緩升騰，象徵將信眾的祈願傳遞至天上神明。每個香環都配有紅色的牌子，上面寫著祈求平安、健康或其他祝福的文字，並搭配紅色流蘇，增添吉祥喜慶的氣氛。
              </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
});

export default Event;