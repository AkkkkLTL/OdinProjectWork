import Icon from "@mdi/react";
import { FilterName, Option, OptionWrapper, Order, OrderWrapper, StyledTop } from "./styles"
import useTop from "./useTop"
import { mdiChevronDown } from "@mdi/js";
import { orderOptions } from "./constants";

const Top = () => {

  const {
    currentFilter,
    orderTitle,
    isOrderOpen,
    orderRef,
    openAndHideOrder,
    handleOptionClick,
  } = useTop();

  return (
    <StyledTop>
      <FilterName>{currentFilter}</FilterName>
      <OrderWrapper>
        <Order
          onClick={openAndHideOrder}
        >
          Order by: <span>{orderTitle}</span>
          <Icon path={mdiChevronDown} size={1} />
        </Order>
        {isOrderOpen && (
          <OptionWrapper ref={orderRef}>
            {orderOptions.map(({id, title}) => (
              <Option
                key={id}
                onClick={handleOptionClick}
              >
                {title}
              </Option>
            ))}
          </OptionWrapper>
        )}
      </OrderWrapper>
    </StyledTop>
  )
}

export default Top;