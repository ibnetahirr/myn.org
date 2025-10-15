"use client";
import React, { useEffect, useState } from "react";

const TopGo = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const pos = document.documentElement.scrollTop;
          const calcHeight = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
          const newScrollValue = Math.round((pos * 100) / calcHeight);
          setScrollValue(newScrollValue);
          if (pos > 100) {
              setShowGoTop(true);
          } else {
              setShowGoTop(false);
          }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const handleClick = () => {
      document.documentElement.scrollTop = 0;
  };

  return (
      <div
          className="go-top"
          style={{
              display: showGoTop ? 'grid' : 'none',
              background: `conic-gradient( rgba(var(--primary),1) ${scrollValue}%, var(--light-gray) ${scrollValue}%)`
          }}
          onClick={handleClick}
      >
        <span className="progress-value">
          <i className="ti ti-arrow-up"></i>
        </span>
      </div>
  );
}

export default TopGo;