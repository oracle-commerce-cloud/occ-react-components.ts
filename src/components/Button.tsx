import React, { useContext } from "react";
import { CommerceCloudContext } from "../context/CommerceCloudContext";
import { classNames } from "../helpers/classNames";

export const Button = ({ label, children, ...props }: any) => {
  const { translate } = useContext(CommerceCloudContext);
  return (
    <button className={classNames("cc-button-secondary ")} {...props}>
      {label && translate(label)}
      {children && translate(children)}
    </button>
  );
};

export default Button;
