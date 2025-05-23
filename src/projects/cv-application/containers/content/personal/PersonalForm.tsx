import { type ChangeEvent } from "react";
import InputGroup from "@project/cv-application/components/input/InputGroup";
import { Personal } from "@/projects/cv-application/types/entries";

interface IProps {
  /**
   * 个人信息数据
   */
  data:Personal;
  /**
   * 输入框值改变时的回调函数
   * @param e 输入框的事件对象
   */
  onChange: (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

/**
 * 个人信息表单组件
 */
export default function PersonalForm({
  data,
  onChange,
}:IProps) {

  return (
    <form className="p-[18px] bg-white rounded-[12px]">
      <h2 className="text-[24px]">Personal Details</h2>
      <InputGroup
        type="text"
        id="full-name"
        labelText="Full Name"
        placeholder="First and Last Name"
        value={data.fullName || ""}
        onChange={onChange}
        data-key="fullName"
      />
      <InputGroup
        type="email"
        id="email"
        labelText="Email"
        placeholder="Enter Email"
        value={data.email || ""}
        onChange={onChange}
        data-key="email"
        recommended
      />
      <InputGroup
        type="tel"
        id="phone-number"
        labelText="Phone Number"
        placeholder="Enter Phone Number"
        value={data.phoneNumber || ""}
        onChange={onChange}
        data-key="phoneNumber"
        recommended
      />
      <InputGroup
        type="text"
        id="address"
        labelText="Address"
        placeholder="City, Country"
        value={data.address || ""}
        onChange={onChange}
        data-key="address"
        recommended
      />
    </form>
  );
}