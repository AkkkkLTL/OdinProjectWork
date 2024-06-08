import { Status, StyledPrice } from "./styles";

const Price = () => {
  return (
    <StyledPrice>
      <span>$0</span>
      <Status>
        Add to cart +
      </Status>
    </StyledPrice>
  );
}

export default Price;