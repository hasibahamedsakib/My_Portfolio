import style from "../Banner/banner.module.css";
import { BsThreeDots } from "react-icons/bs";

const HrLine = () => {
  return (
    <div>
      <p className={`${style.line} relative  pr-10 `}>
        <BsThreeDots className="w-8 h-8" />
      </p>
    </div>
  );
};

export default HrLine;
