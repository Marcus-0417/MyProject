import React, { forwardRef } from "react";

function About(props, ref) {

    return (
        <>
            <div id="section-6" className="section" ref={ref}>
                <img style={{width:"150px", position:"absolute", left:"0px", bottom:"0px"}} src="./images/800.png" alt="" />
                <img style={{width:"150px", position:"absolute", right:"0px", bottom:"0px", transform:"scaleX(-1)"}} src="./images/800.png" alt="" />
            <iframe style={{border:0, width:"1200px", height:"550px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.497479245566!2d120.44646597602168!3d23.47858437885678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e9431ba3b6927%3A0x6be3c90d2291b3d3!2z6Zec5buC5aKD5buf!5e0!3m2!1szh-TW!2stw!4v1736441319884!5m2!1szh-TW!2stw" frameBorder="0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <footer>
                <div style={{textAlign:"center", marginTop:"160px"}}><small>本網站為學生練習作品,僅供學習使用，不具商業行為</small></div>
                <div>
                    <h3>聯絡我們</h3>
                    <p>TEL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0987654321</p>
                    <p>MAIL &nbsp;&nbsp;&nbsp;&nbsp;   temple@gmail.com</p>
                </div>
                <div style={{textAlign:"center", marginTop:"160px"}}><small>Copyright © 關廂境廟, All Rights Reserved.</small></div>
            </footer>
        </>
    )
}

export default forwardRef(About);