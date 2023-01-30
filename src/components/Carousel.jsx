import { useEffect, useState } from "react";

const Carousel = ({ setOpt, size }) => {
  const [arr2, setarr2] = useState([]);
  const [current, setCurrnt] = useState(1);
  const arr = [1, 2, 3, 4, 5, 6];
  useEffect(() => {
    if (size > 0) {
      let arre = null;
      if (size === 35) {
        arre = arr.slice(0, 6);
        setarr2(arre);
      }
      if (size === 21) {
        arre = arr.slice(0, 4);
        setarr2(arre);
      }
      if (size === 9) {
        arre = arr.slice(0, 2);
        setarr2(arre);
      }
      if (size <= 4) {
        arre = arr.slice(0, 1);
        setarr2(arre);
      }
    }
  }, [size]);
  return (
    <div className="flex flex-row items-center justify-center my-4 gap-2">
      {arr2.length &&
        arr2.map((dot, idx) => (
          <span
            key={idx}
            style={{ borderRadius: "50%", backgroundColor: "#6a6666", height: "15px", width: "15px" }}
            className={current === arr[idx] ? "isActiveDot" : ""}
            onClick={() => (setOpt(arr[idx]), setCurrnt(arr[idx]))}></span>
        ))}
    </div>
  );
};

export default Carousel;
