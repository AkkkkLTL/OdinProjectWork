import { useTheme } from "styled-components";
import { Button } from "./styles";

const ButtonGroup = () => {
  const theme = useTheme();

  return (
    <>
      <Button type="submit" $color={theme.colors.blue[150]}>
        Save
      </Button>
      <Button type="button" $color={theme.colors.black[50]}>
        Cancel
      </Button>
    </>
  )
}
export default ButtonGroup;