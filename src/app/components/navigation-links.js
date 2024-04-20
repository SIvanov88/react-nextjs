import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const LinksBox = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  padding: "0px 10px",
}));

const Links = styled("div")(() => ({
  fontSize: "12px",
  fontWeight: 500,
  marginRight: "15px",
  cursor: "pointer",
}));

export default function NavigationLinks() {
  const menuButtons = [
    { id: "home", label: "Home" },
    { id: "news", label: "News" },
    { id: "scores", label: "Scores" },
  ];
  return (
    <LinksBox>
      {menuButtons.map((button) => {
        return <Links>{button.label}</Links>;
      })}
    </LinksBox>
  );
}
