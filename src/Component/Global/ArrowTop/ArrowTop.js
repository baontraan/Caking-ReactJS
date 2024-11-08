import React, { useEffect, useState } from "react";
import "./ArrowTop.css";
const ArrowTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cuộn lên đầu trang khi nhấn vào nút
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`arrow-top ${isVisible && "visible"}`}
      onClick={scrollToTop}
    >
      <div className="thumb">
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default ArrowTop;
