import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";

export const AppMain = styled(Layout)`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export const Nav = styled(Sider)`

  & .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`

export const Detail = styled.div`
  flex: 1;
  overflow-y: scroll;
  width: 100%;
`