import EChartsReact from "echarts-for-react";
import styled from "styled-components";
import { Swiper } from "swiper/react";

export const EchartBoard = styled(EChartsReact)`
  width: 50%;
  height: 50%;
`

export const MySwiper = styled(Swiper)`
  width: 540px;
  height: fit-content;

  & .swiper-slide {
    text-align: center;
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      display: block;
      object-fit: cover;
    }
  }
`