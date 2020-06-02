import React from "react";
import HeaderContent from "../header/HeaderContent";

class Content extends React.Component {
  render() {
    const { page } = this.props;

    console.log("page-->", page);
    return (
      <React.Fragment>
        <HeaderContent page={page} />;
      </React.Fragment>
    );
  }
}

export default Content;
