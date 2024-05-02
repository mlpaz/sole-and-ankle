import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const ShoeWrapper = styled.div`
  flex: 1;
  max-width: 480px;
  min-width: 275px;
`;

export default ShoeGrid;
