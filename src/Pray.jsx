import AOS from 'aos';
import 'aos/dist/aos.css';
import { forwardRef, useEffect } from 'react';

function Pray(props, ref) {

    useEffect(() => {
        AOS.init(); // 初始化
      }, []);

    return (
        <>
            <div id="section-4" className="section" ref={ref}>
                <div className="Pray-wrapper">
                    <img data-aos="zoom-in" data-aos-duration="3000" src="../images/Pray-1.jpg" alt="" />
                    <h2>壹·誠心祈禱</h2>
                    <p>雙手合十向神明表達祈願，心中默念自己的姓名、出生年月日（或生辰八字）、地址等。<br /><br />說明問題：清楚地將問題陳述一次，可以是關於健康、事業、感情、家庭等方面，並盡量將問題具體化。</p>
                </div>

                <div className="Pray-wrapper">
                    <p>在籤筒中搖動籤，直到一支籤自然掉出或從其中自行抽出一支籤，記下籤號或籤文。</p>
                    <h2>貳·求籤</h2>
                    <img data-aos="fade-up-left" data-aos-duration="3000"  style={{borderRadius: "50px 0px 0px 50px"}} src="../images/Pray-2.jpg" alt="" />
                </div>

                <div className="Pray-wrapper">
                    <img data-aos="fade-up-right" data-aos-duration="3000"  src="../images/Pray-3.webp" alt="" />
                    <h2>三·擲筊請示</h2>
                    <p>接著擲筊確認籤意<br /><br />連續3個聖筊：恭喜!神明指示這支籤是要給你的。<br />
                        陰筊或笑筊：籤不準，需重新抽籤。</p>
                </div>

            </div>
        </>
    )
}

export default forwardRef(Pray);