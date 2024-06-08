import React from "react";
import { filters } from "./constants";
import { CategoryWrapper, Filter, Header, IconWrapper, StyledSidebar } from "./styles";

const Sidebar:React.FC = () => {
  return (
    <StyledSidebar
      $isChangeSidebar={false}
    >
      {filters.map(({id, header, options }) => (
        <CategoryWrapper key={id}>
          <Header>{header}</Header>
          {options.map(option => (
            <Filter key={option.id}>
              <IconWrapper
               $isHighlight={false}
              >
                {option.icon}
              </IconWrapper>
              {option.name}
            </Filter>
          ))}
        </CategoryWrapper>
      ))}
    </StyledSidebar>
  );
}
Sidebar.displayName = 'Sidebar';
export default Sidebar