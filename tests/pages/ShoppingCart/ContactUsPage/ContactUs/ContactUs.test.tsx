import { afterEach, describe, expect, test, vitest } from "vitest";
import { cleanup, fireEvent, render } from "@testing-library/react";

import ContactUs from "@/pages/ShoppingCart/ContactUsPage/ContactUs"
import { ISubmitResult } from "@/components/Form/types";

describe("ContactUs", () => {
  afterEach(cleanup)

  test("When submit without filling in fields should display errors", () => {
    const handleSubmit = vitest.fn();
    const { getAllByText, getByText } = render(<ContactUs onSubmit={handleSubmit} />);
    
    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    const errorSpans = getAllByText("This must be populated");
    expect(errorSpans.length).toBe(2);
  });

  test("When submit after filling in fields should sumit okay", () => {
    const handleSubmit = vitest.fn();

    const { container, getByText, getByLabelText } = render(<ContactUs onSubmit={handleSubmit} />);
    const nameField:HTMLInputElement = getByLabelText("Your Name") as HTMLInputElement;
    expect(nameField).not.toBeNull();
    fireEvent.change(nameField, {target: {value: "Carl"}});

    const emailField:HTMLInputElement = getByLabelText("Your Email Address") as HTMLInputElement;
    expect(emailField).not.toBeNull();
    fireEvent.change(emailField, {target: {value: "carl.rippon@testmail.com"}});

    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);
    const errorsDiv = container.querySelector("[data-testid='formErrors'");
    expect(errorsDiv).toBeNull();
    expect(handleSubmit).toBeCalledTimes(1);
    expect(handleSubmit).toBeCalledWith({
      name: "Carl",
      email: "carl.rippon@testmail.com",
      reason: "Support",
      notes: ""
    });
  });

  test("Renders okay", () => {
    const handleSubmit = async ():Promise<ISubmitResult> => {
      return {
        success: true
      }
    };

    const { container } = render(<ContactUs onSubmit={handleSubmit} />);
    expect(container).toMatchSnapshot();
  });
});