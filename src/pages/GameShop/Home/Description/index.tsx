import Icon from "@mdi/react";
import { mdiAlphaRBox, mdiGithub } from "@mdi/js";

import { screenshots } from "../constants";

import { 
  Header, Links, Link, 
  StyledDescription,
  SlidesContainer,
  Image
} from "./styles";

const Description = () => {
  return (
    <StyledDescription>
      <Header>
        <h2>
          ENJOY NEXT LEVEL OF
        </h2>
        <h1>GAMING</h1>
        <p>quick Select games with dicated platform</p>
      </Header>
      <Links>
        <Link
          href="https://github.com/ddong-holangni"
          target="_blank"
        >
          <Icon path={mdiGithub} size={1}/>
          ddong-holangni
        </Link>
        <Link
          href="https://rawg.io/apidocs"
          target="_blank"
        >
          <Icon path={mdiAlphaRBox} size={1} />
          RAWG API
        </Link>
      </Links>
    </StyledDescription>
  );

}

export default Description;