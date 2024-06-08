import places from "./constants";
import { Header, LinkWrapper, Links, Navigation } from "./styles";

const QuickNavigation = () => {

  return (
    <Navigation>
      <Header>Category</Header>
      <Links>
        {places.map(({id, name, icon, place, color }) => (
          <li key={id}>
            <LinkWrapper
              to={place}
              style={{
                backgroundColor: `${color}`
              }}
            >
              {name}
              {icon}
            </LinkWrapper>
          </li>
        ))}
      </Links>
    </Navigation>
  );
}
export default QuickNavigation;