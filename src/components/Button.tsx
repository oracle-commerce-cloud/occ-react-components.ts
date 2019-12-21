import React, { useContext } from "react";
import { RequireContext } from "../context/RequireContext";
import { classNames } from "../helpers/classNames";

export const Button = ({ label, children, ...props }: any) => {
  const { translate } = useContext(RequireContext);
  return (
    <button className={classNames("cc-button-secondary ")} {...props}>
      {label && translate(label)}
      {children && translate(children)}
    </button>
  );
};

export default Button;
