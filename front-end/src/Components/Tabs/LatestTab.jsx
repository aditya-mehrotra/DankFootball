import React from "react";
import { CustomCard } from "../CustomCard";
import { DisplayCards } from "../DisplayCards";
import { Box } from "@mui/system";
import { useState } from "react";
export const LatestTab = (props) => {
const [Cards, setCards] = useState([])

fetch('/api/latest',{
  method:'GET',
  header:{
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then((res)=>{
  return res.json()
}).then((body)=>{
  setCards(body);
})

  return (
    <>
      <Box sx={{ margin: "1rem" }}>
        {Cards.length!==0&&<CustomCard card={Cards[0]} />}
        <DisplayCards
          cards={Cards.filter((ele, idx) => {
            return idx !== 0;
          })}
        />
      </Box>
    </>
  );
};
