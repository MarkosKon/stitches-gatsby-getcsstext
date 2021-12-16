import * as React from "react";
import { styled } from "../stitches/stitches.config";

const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(20px, 1fr))",
  gridTemplateRows: "20px",
});
const Cell = styled("div", {
  boxSizing: "border-box",
  border: "1px solid",
  height: "20px",
});

const TonsOfStyles: React.FC = () => {
  return (
    <Container>
      {Array.from({ length: 360 })
        .fill(0)
        .map((_, index) => (
          <Cell
            key={index}
            css={{ backgroundColor: `hsl(${index}deg, 70%, 60%)` }}
          />
        ))}
    </Container>
  );
};

export default TonsOfStyles;
