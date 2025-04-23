import { ChangeEvent, FC } from "react";
import InputGroup from "../InputGroup";

interface IProps {
  onChange: (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

const PersonalDetails:FC<IProps> = (props) => {

  const { onChange, fullName, email, phoneNumber, address } = props;

  return (
    <form className="p-[18px] bg-white rounded-[12px]">
      <h2 className="text-[24px]">Personal Details</h2>
      <InputGroup
        type="text"
        id="full-name"
        labelText="Full Name"
        placeholder="First and Last Name"
        value={fullName}
        onChange={onChange}
        data-key="fullName"
      />
      <InputGroup
        type="email"
        id="email"
        labelText="Email"
        placeholder="Enter Email"
        value={email}
        onChange={onChange}
        data-key="email"
        recommended
      />
      <InputGroup
        type="tel"
        id="phone-number"
        labelText="Phone Number"
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChange={onChange}
        data-key="phoneNumber"
        recommended
      />
      <InputGroup
        type="text"
        id="address"
        labelText="Address"
        placeholder="City, Country"
        value={address}
        onChange={onChange}
        data-key="address"
        recommended
      />
    </form>
  );
}
export default PersonalDetails;