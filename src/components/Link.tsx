import React, { MouseEvent, useContext } from "react";
import { RequireContext } from "../context/RequireContext";

export const Link = React.memo(({ label, route, children, ...props }: any) => {
  const { translate, navigation } = useContext(RequireContext);
  const href = navigation.getPathWithLocale(route);
  const goto = (event: MouseEvent<any, any>) => {
    event.preventDefault();
    navigation.goTo(route);
  };
  return (
    <a href={href} onClick={goto} {...props}>
      {label && translate(label)}
      {children && children}
    </a>
  );
});

export default Link;
