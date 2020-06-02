import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/content/Content";

class AppRouter extends React.Component {
  render() {
    const { pages } = this.props;
    // console.log("pages-->",pages)
    return (
      <BrowserRouter>
        <Navbar pages={pages} />
        <Switch>
          {pages.map((page) => {
            return (
              <Route
                key={page.path}
                path={page.path}
                exact={true}
                render={(props) => {
                  return <Content page={page} />;
                }}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default AppRouter;
