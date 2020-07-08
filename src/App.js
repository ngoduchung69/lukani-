import React from "react";
import HeaderTop from "./components/header-top";
import styled from "styled-components";
import GeneralCarousel from "./components/general-carousel";
import LukaniDetail from "./components/lukani-detail";
import FeaturedProducts from "./components/feature-products";
import WhatOurCustomerSays from "./components/what-our-customer-says";
import EmailForDiscount from "./components/get-off-your-next-order";

function App() {
  return (
    <Wrapper>
      <HeaderTop />
      <GeneralCarousel />
      <LukaniDetail />
      <FeaturedProducts />
      <WhatOurCustomerSays />
      <EmailForDiscount />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 5000px;
  position: relative;
`;

export default App;
