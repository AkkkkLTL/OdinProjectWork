import { FC } from "react";
import ContactUs from "./ContactUs";
import { ISubmitResult, IValues } from "@/components/Form/types";
import { wait } from "@/api/ShoppingCart";

const ContactUsPage:FC = () => {

  const handleSubmit = async (values:IValues):Promise<ISubmitResult> => {
    await wait(1000);
    return {
      success: true
    }
  } 

  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>If you enter your details we'll get back to you as soon as we can</p>
      <ContactUs
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default ContactUsPage;