import { useTheme } from "styled-components"
import { Blur, SecondaryHeader, Section, StyledForm, SubmitSection } from "./styles";
import Input from "../Input";
import { GameDetails } from "../constants";
import SelectionInput from "../SelectionInput";
import ButtonGroup from "../BttonGroup";

const Form = () => {
  const theme = useTheme();
  
  return (
    <StyledForm>
      <Section>
        <SecondaryHeader>General information</SecondaryHeader>
        <Input
          required
          name="name"
          type="text"
          title="Title"
          placeHolder="Add title"
        />
        <Input
          required
          name="background_image"
          type="url"
          title="Coverage Image"
          placeHolder="Add a link to the picture"
        />
        <textarea
          required
          name="description_raw"
          title="About"
          placeholder="Add game description"
        />
        <Blur />
      </Section>

      <Section>
        <Input 
          required
          type="date"
          name="released"
          title="Release date"
        />
        {GameDetails.map(detail => (
          <SelectionInput
            title={detail.title}
            emoji={detail.emoji}
            isRequired={detail.isRequired}
            optionsList={detail.optionsList}
            placeholder={detail.description}
            inputDescription={detail.inputDescription}
            inputPlaceholder={detail.inputPlaceholder}
          />
        ))}
        <Input
          type="url"
          name="website"
          title="Website"
          placeHolder="Website URL"
        />
        <SubmitSection>
          <ButtonGroup />
        </SubmitSection>
      </Section>
    </StyledForm>
  );
}
export default Form;