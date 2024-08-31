import { FC, ReactNode, useState } from "react";
import type { ITabsProps } from "./types";
import { TabsContext } from "./context";

const Tabs:FC<ITabsProps>  = props => {

  const [activeName, setActiveName] = useState<string>("");
  const [activeContent, setActiveContent] = useState<ReactNode>();

  // handle single Tab Click Event
  const handleTabClick = (name:string, content:ReactNode) => {
    setActiveName(name);
    setActiveContent(content);
  }

  return (
    <TabsContext.Provider
      value={{
        activeName: activeName,
        handleTabClick: handleTabClick
      }}
    >
      <ul className="tabs">
        {props.children}
      </ul>
      <div>{activeContent}</div>
    </TabsContext.Provider>
  )
}

export default Tabs;