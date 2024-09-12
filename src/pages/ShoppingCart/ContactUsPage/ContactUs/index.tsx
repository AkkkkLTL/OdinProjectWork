import Form from "@/components/Form";
import { ISubmitResult, IValues } from "@/components/Form/types";
import { between, minLength, required } from "@/components/Form/validator";
import { FC } from "react";

interface IProps {
  onSubmit: (values:IValues) => Promise<ISubmitResult>
}

const ContactUs:FC<IProps> = (props) => {

  const handleSubmit = async (values:IValues):Promise<ISubmitResult> => {
    const result = await props.onSubmit(values);
    return result;
  }

  return (
    <Form
      defaultValues={{name:"", email:"", reason:"Support", notes:""}}
      validationRule={{
        name: [{validator:required}, {validator:minLength, arg:3}],
        email: {validator:required},
        urgency: [{validator:required}, {validator:between, arg:{min:1, max:10}}]
      }}
      onSubmit={handleSubmit}
    >
      <Form.Field
        name="name"
        label="Your Name"
      />
      <Form.Field
        name="email"
        label="Your Email Address"
      />
      <Form.Field
        name="urgency"
        label="How Urgent Is a Response"
        type={"Number"}
      />
      <Form.Field
        name="reason"
        label="Reason You Need to Contact Us"
        type={"Select"}
        options={["Marking", "Support", "Feedback", "Jobs", "Other"]}
      />
      <Form.Field
        name="notes"
        label="Additional Notes"
        type={"TextArea"}
      />
    </Form>
  )
}

export default ContactUs;