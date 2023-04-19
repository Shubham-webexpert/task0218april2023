import React, { createContext, useReducer } from "react";
import CardList from "./Components/CardList/CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SortCard from "./Components/SortCard/SortCard";
import { ItemReducer } from "./Components/ReduxFun/ItemReducer";
import { ItemData } from "./data";

export const CardContext = createContext();

export const initialState = {
  itemArr: ItemData,
  sortArr: [],
};

const App = () => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);
  // console.log("sortArr",state.sortArr)
  
  return (
    <div>
      <CardContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CardList />} />
            <Route path="/sortitem" element={<SortCard />} />
          </Routes>
        </BrowserRouter>
      </CardContext.Provider>
    </div>
  );
};

export default App;
