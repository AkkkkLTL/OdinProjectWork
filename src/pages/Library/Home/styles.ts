import EChartsReact from "echarts-for-react";
import styled from "styled-components";
import { Swiper } from "swiper/react";
import { BookCard } from "../BookList/styles";

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

export const HomeCard = styled(BookCard)`
  .ant-card-actions {
  }
  :where(.css-dev-only-do-not-override-1fumvat).ant-card .ant-card-actions {
    border-top: 0;
  }
`