import React, { useState, useEffect } from 'react';

import { TfiArrowCircleUp } from "react-icons/tfi";
const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // 監聽滾動事件
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // 清除事件監聽器
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            id="GoToTop"
            onClick={scrollToTop}
            style={{
                display: isVisible ? 'block' : 'none',
            }}
        >
            <TfiArrowCircleUp />
        </div>
    );
};

export default GoToTop;
