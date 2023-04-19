import React, { useContext } from "react";
import CardItem from "../Card/CardItem";
import { ItemData } from "../../data";
import "./cardlist.css";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../App";

const CardList = () => {
  const {state}= useContext(CardContext);
  const Navigate=useNavigate();
  return (
    <div>
      <div className="container">
        {ItemData.map((ele) => (
          <CardItem key={ele.id} item={ele} />
        ))}
      </div>
      <div className="addbtn">
      <button onClick={()=>Navigate("/sortitem")} disabled={state.sortArr.length<=0}>Add to List </button>
      </div>
    </div>
  );
};

export default CardList;
