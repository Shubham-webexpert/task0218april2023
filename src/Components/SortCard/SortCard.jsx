import React, { useContext } from "react";
import { CardContext } from "../../App";
import "./sortcard.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const SortCard = () => {
  const { state, dispatch } = useContext(CardContext);
  
  const Navigate=useNavigate();
  return (
    <>
    <div className="removeallbtn">
    <Button variant="contained" onClick={()=>dispatch({type:"REMOVE_ALL_ITEMS"})} style={{backgroundColor:"red",fontWeight:"bold"}} disabled={state.sortArr.length<=0}>Remove all Items</Button>
    </div>
      <div className="sortcontainer">
        {state.sortArr.map((ele, index) => {
          return (
            <div className="sortitem" key={index}>
            <div className="sortitemimg">
            <img src={ele.images[0]} alt="" />
              </div>
              <h3 className="sortitemdetail"></h3>
              <div className="removebtn">
                <button
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_ITEM",
                      payload: ele.id,
                    });
                  }}
                >
                  Remove From List
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="homebtn">
      <button onClick={()=>{Navigate("/")}}><ArrowBackIcon style={{marginRight:10,fontSize:20}}/>  Go to Home</button>
      </div>
    </>
  );
};

export default SortCard;
