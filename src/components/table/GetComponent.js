import React from "react";
import Image from "./components/Img";
import Link from "./components/Link";
import Phone from "./components/Phone";
import Email from "./components/Email";
import Tick from "./components/Tick";
import ReadMore from "./components/ReadMore";

const getComponent = (elementKey) => {
  const myComp = {
    image: Image,
    link: Link,
    phone: Phone,
    email: Email,
    tick: Tick,
    readMore: ReadMore,
  };
  const Default = (props) => <div>{props.value}</div>;

  return myComp[elementKey] || Default;
};
export default getComponent;
