import React from "react";
import TableContent from "../table/TableContent";

class HeaderContent extends React.Component {
  render() {
    const { page } = this.props;

    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4"> {page.pageTitle} </h1>
          <p className="lead"> {page.pageDescription} </p>
        </div>
        );
        <TableContent table={page.table} />
      </div>
    );
  }
}
export default HeaderContent;
