import React, { useEffect, useContext } from "react";
import MyContext from "../../context/MyContext";
import SingleCard from "../SingleCard/SingleCard";
import FilterAirlines from "../FilterAirlines/FilterAirlines";
import "./Cards.css";

var fetchJsonp = require("fetch-jsonp");

export default function Cards() {
  const { items, setItems } = useContext(MyContext);
  const { fItems } = useContext(MyContext);

  const getAllItems = async() => {
    try {
      
      fetchJsonp("https://kayak.com/h/mobileapis/directory/airlines/homework", {
        jsonpCallback: "jsonp",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setItems(data);
        })
        .catch(function (ex) {
          console.log("parsing failed", ex);
        });
    }catch (e) {
      console.log(e);
    }
  
  };

  const getFilterItems = () => {
    return items
      .filter((item) => {
        if (fItems.length) {
          return fItems.includes(item.alliance);
        } else {
          return item;
        }
      })
      .map((item) => {
        return <SingleCard airline={item} key={item.code} />;
      });
  };

  useEffect(() => {
    getAllItems();
  },[]);

  
  return items ? (
    <div className="cards">
      <FilterAirlines />

      <div className="wrapper">{getFilterItems()}</div>
    </div>
  ) : (
    <div className="loading">Loading...</div>
  );
}
