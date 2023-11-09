import { useState, useEffect } from "react";

export const useScrollTop = (threshold = 10) => {
    const [scrolled, setScrollerd] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setScrollerd(true);
            }else{
                setScrollerd(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return scrolled;
}