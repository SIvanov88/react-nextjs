"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavigationLinks from "./navigation-links";

const ToolBar = styled("div")(() => ({
  width: "100%",
  height: "80px",
}));

const ToolbarFirstRow = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  backgroundColor: "green",
  height: "40px",
}));

const ToolbarSecondRow = styled("div")(() => ({
  width: "100%",
  backgroundColor: "orange",
  height: "40px",
  display: "flex",
  justifyContent: "flex-start",
}));

export default function Header() {
  const router = useRouter();
  return (
    <ToolBar>
      <ToolbarFirstRow>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Image
            style={{ cursor: "pointer" }}
            src={"/images/football-ball.png"}
            width={30}
            height={30}
            alt="ball"
            onClick={() => router.push("/")}
          />
        </div>
        <div>Titles</div>
        <div></div>
      </ToolbarFirstRow>
      <ToolbarSecondRow>
        <NavigationLinks />
      </ToolbarSecondRow>
    </ToolBar>
  );
}
