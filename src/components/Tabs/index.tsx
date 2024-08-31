import Tab from "./Tab";
import {default as ContainerTabs} from "./Tabs";
import "./styles.scss"

type CompondComponent = typeof ContainerTabs & {
  Tab: typeof Tab
}

const Tabs = ContainerTabs as CompondComponent;

Tabs.Tab = Tab;

export default Tabs;