import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";

const AppContainer = styled(Layout)`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 10px;
`

const SiderWrapper = styled(Sider)`

  border-radius: 10px;

  & .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 20px;
 }
`

const Detail = styled.div`
  flex: 1;
  overflow-y: scroll;
  width: 100%;
`
export {
  AppContainer, SiderWrapper
}