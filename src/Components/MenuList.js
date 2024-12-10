import { useState } from "react";
import MenuItemCard, {withAddBtn} from "./MenuItemCard";
import Shimmer2 from "./Shimmer2";

const MenuList = ({ cards }) => {
  const [toggle, setToggle] = useState(true);
  const [subToggle, setSubToggle] = useState({});
  const WithAddBtnMenuItemCard = withAddBtn(MenuItemCard);

  // console.log(WithAddBtnMenuItemCard);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSubToggle = (index) => {
    setSubToggle((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const renderFineCards = (cards) => {
    if (cards?.card?.card?.itemCards) {
      return (
        <div className="border-[3px] p-3 rounded-xl">
          <ul>
            {cards?.card?.card?.itemCards.map((card, index) => (
              <WithAddBtnMenuItemCard key={index} card={card} />
            ))}
          </ul>
        </div>
      );
    } else if (cards?.card?.card?.categories) {
      return cards?.card?.card?.categories?.map((category, index) => (
        <div key={index} className="px-3">
          <button
            className="w-full text-left flex items-center justify-between"
            onClick={() => handleSubToggle(index)}
          >
            <div className="border-[2px] rounded-xl w-full px-2 py-1 flex justify-between items-center">
              <h5 className="m-2">{category.title}</h5>
              <span className="text-lg">{subToggle[index] ? "▲" : "▼"}</span>
            </div>
          </button>
          {subToggle[index] && (
            <ul>
              {category?.itemCards.map((card, index) => (
                <WithAddBtnMenuItemCard key={index} card={card} />
              ))}
            </ul>
          )}
        </div>
      ));
    } else {
      return <Shimmer2 />;
    }
  };

  const { title } = cards?.card?.card;

  if (!title || title === "Top Picks") {
    return null;
  }

  return (
    <div className="">
      <button
        className="border-[3px] p-3 rounded-xl w-[100%] text-left flex justify-between items-center"
        onClick={handleToggle}
      >
        <h3 className="font-gilore font-bold">{title}</h3>
        <span className="text-lg">
          {toggle ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
              <path d="m7.293 13.293 1.414 1.414L12 11.414l3.293 3.293 1.414-1.414L12 8.586l-4.707 4.707z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
              <path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z" />
            </svg>
          )}
        </span>
      </button>
      {toggle && renderFineCards(cards)}
    </div>
  );
};

export default MenuList;
