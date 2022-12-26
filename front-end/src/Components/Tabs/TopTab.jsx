import React from "react";
import { CustomCard } from "../CustomCard";
import { DisplayCards } from "../DisplayCards";
import { Box } from "@mui/system";
export const TopTab = (props) => {
  return (
    <>
      <Box sx={{ margin: "1rem" }}>
        <CustomCard card={props.Cards[0]} />
        <DisplayCards
          cards={props.Cards.filter((ele, idx) => {
            return idx !== 0;
          })}
        />
      </Box>
    </>
  );
};