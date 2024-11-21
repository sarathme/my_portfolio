import { useEffect, useRef, useState } from "react";
import styles from "./SliderContainer.module.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function SliderContainer({ data, render }) {
  const ref = useRef();

  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setIsScrollable(ref.current.scrollWidth > ref.current.clientWidth);
    }
  }, [data]);

  function handleNext() {
    ref.current.scrollLeft += ref.current.children[0].offsetWidth;
  }
  function handlePrev() {
    ref.current.scrollLeft -= ref.current.children[0].offsetWidth;
  }
  return (
    <div className={`${styles.wrapper} breakout`}>
      <div
        ref={ref}
        className={`${styles.slider} ${
          !isScrollable ? "justify-content-center" : ""
        }`}>
        {data.map(render)}
      </div>
      {isScrollable && (
        <>
          <button
            className={`${styles.btn} ${styles.btnLeft}`}
            onClick={handlePrev}>
            <HiChevronLeft />
          </button>
          <button
            className={`${styles.btn} ${styles.btnRight}`}
            onClick={handleNext}>
            <HiChevronRight />
          </button>
        </>
      )}
    </div>
  );
}

export default SliderContainer;
