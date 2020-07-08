import React from "react";
import styled from "styled-components";
import ColumnItems from "./ColumnItems";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FeaturedProducts = () => {
  return (
    <Wrapper>
      <Cover>
        <TitleBox>
          <Title>Featured Products</Title>
          <UnderlineHandmade></UnderlineHandmade>
        </TitleBox>

        <StyledCarousel infinite responsive={responsive}>
          <ColumnItems />
          <ColumnItems />
          <ColumnItems />
          <ColumnItems />
          <ColumnItems />
          <ColumnItems />
          <ColumnItems />
          <ColumnItems />
        </StyledCarousel>
      </Cover>
    </Wrapper>
  );
};

const StyledCarousel = styled(Carousel)`
  margin: 20px !important;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const UnderlineHandmade = styled.div`
  height: 2px;
  width: 100px;
  background-color: #222222;
  margin-bottom: 30px;
`;

const Cover = styled.div`
  margin: 100px 0px;
`;

const Wrapper = styled.div``;

const Title = styled.div`
  font-size: 40px;
  line-height: 48px;
  font-weight: 400;
  display: inline-block;
  margin-bottom: 0;
  text-transform: capitalize;
  position: relative;
  font-family: "Lora", serif;
  padding-bottom: 22px;
  color: #222222;
`;

export default FeaturedProducts;
