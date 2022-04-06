import { Fragment } from "react";

import MainNavigation from "./MainNavigation";
import "./Layout.css";
import FooterNav from "./nav/FooterNav";
import HeaderNav from "./nav/HeaderNav";

const Layout = (props) => {
  return (
    <Fragment>
      <div className="layout">
        <MainNavigation />
        <main>{props.children}</main>
        <FooterNav />
      </div>
    </Fragment>
  );
};

export default Layout;
