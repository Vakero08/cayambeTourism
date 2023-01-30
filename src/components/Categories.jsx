import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faWater,
  faSignsPost,
  faUtensils,
  faMonument,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
const hotel = <FontAwesomeIcon icon={faHotel} className="mx-1" />;
const sendero = <FontAwesomeIcon icon={faSignsPost} className="mx-1" />;
const cascada = <FontAwesomeIcon icon={faWater} className="mx-1" />;
const food = <FontAwesomeIcon icon={faUtensils} className="mx-1" />;
const monumnent = <FontAwesomeIcon icon={faMonument} className="mx-1" />;
const locale = <FontAwesomeIcon icon={faLocationPin} className="mx-1" />;

const Categories = ({ filterCategory }) => {
  const CATEGORIES = ["Sitios turísticos", "Senderismo", "Gastronomía", "Cascadas", "Monumentos", "Hospedaje"];
  const COLORS = ["orange-500", "amber-500", "lime-500", "green-500	", "emerald-500", "teal-500"];
  const ICON = [locale, sendero, food, cascada, monumnent, hotel];

  return (
    <div className="flex flex-row gap-1 items-center mx-2 my-4 justify-center">
      {CATEGORIES.map((cat, idx) => {
        return (
          <button
            key={idx}
            className={`rounded-lg text-center border-${COLORS[idx]} border-solid border p-2  hover:bg-zinc-800	 active:bg-zinc-800	 outline-inherit focus:ring-0`}
            onClick={() => filterCategory(cat)}>
            {ICON[idx]}
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
