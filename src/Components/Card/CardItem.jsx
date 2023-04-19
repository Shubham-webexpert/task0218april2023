import React, { useContext, useState } from "react";
import "./carditem.css";
import { CardContext } from "../../App";

const CardItem = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);

  const {dispatch } = useContext(CardContext);

  const handelChange = (e) => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      dispatch({
        type: "ADD_ITEM",
        payload: item,
      });
    }
  };

  return (
    <div className="card">
      <div className="cardimg">
        <input
          type="checkbox"
          name=""
          id=""
          className="check"
          onChange={(e) => handelChange(e)}
          value=""
          checked={isChecked}
        />
        <img src={item.images[0]} alt={item.title} />
      </div>
      <h2>{item.title}</h2>
    </div>
  );
};

export default CardItem;
