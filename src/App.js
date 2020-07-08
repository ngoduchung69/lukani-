import React from "react";
import HeaderTop from "./components/header-top";
import styled from "styled-components";
import GeneralCarousel from "./components/general-carousel";
import LukaniDetail from "./components/lukani-detail";

function App() {
  return (
    <Wrapper>
      <HeaderTop />
      <GeneralCarousel />
      <LukaniDetail />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 5000px;
  position: relative;
`;

export default App;
