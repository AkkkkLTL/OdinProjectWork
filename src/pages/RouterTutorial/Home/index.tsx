import { Anchor, Paragraph } from "./styles";

export const Index = () => {

  return (
    <Paragraph>
      This.is a demo for Reactor Router.
      <br />
      Check out{ ' ' }
      <Anchor href="https://reactrouter.com">
        the docs at reactrouter.com
      </Anchor>
      .
    </Paragraph>
  );
}