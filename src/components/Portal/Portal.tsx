import ReactDOM from "react-dom";
import React, { FC } from "react";

interface IPortal {
  children: React.ReactNode;
}

const Portal: FC<IPortal> = ({ children }) => {
  const node = document.createElement("div");
  document.body.appendChild(node);

  return ReactDOM.createPortal(children, node);
};

export default Portal;
