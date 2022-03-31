import React from "react";
import "./SingleCard.css";

export default function SingleCard({ airline }) {
  const getUrl = (airUrl) => {
    if (airUrl.startsWith("https://")) {
      const newUrll = new URL(airUrl);
      return newUrll.host.replace("www.", "");
    } else {
      const newUrll = new URL("https://" + airUrl);
      return newUrll.host.replace("www.", "");
    }
  };

  // another way
  // const airlinesUrl = (text) => {
  //   const newStr = text.replaceAll(".", " ").replaceAll("//", " ");
  //   const array = newStr.split(" ");
  //   let newArr = [];
  //   if (array[0] === "https:" && array[1] === "www") {
  //     newArr = [...newArr, ...array.slice(2)];
  //   } else if (array[0] === "https:") {
  //     newArr = [...newArr, ...array.slice(1)];
  //   } else {
  //     newArr = [...newArr, ...array];
  //   }
  //   return newArr.join(".");
  // };

  const getCode = (code) => {
    if (code === "ST") {
      return "Sky Team";
    } else if (code === "OW") {
      return "Oneworld";
    } else if (code === "SA") {
      return "Star Alliance";
    }
  };

  return (
    <div className="card box">
      <div className="logo">
        <img
          src={"https://content.r9cdn.net" + airline.logoURL}
          className="allianceLogo"
          alt=".."
        />
      </div>

      <div className="details">
        <p className="AirName">{airline.name}</p>
        <div className="info">
          <p className="AirCode">{getCode(airline.alliance)}</p>
          {airline && airline.phone !== " " && (
            <p className="AirPhone">{airline.phone}</p>
          )}
          <p className="AirSite">{getUrl(airline.site)}</p>
        </div>
      </div>
    </div>
  );
}
