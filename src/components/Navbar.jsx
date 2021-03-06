import React, {Fragment} from "react";
import logo from "../assets/images/download.jpg";

const Navbar = () => {
  return (
<Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Welcome John</span>
      <form className="form-inline my-2 ml-auto my-lg-0">
        <img src={logo} width="30" height="30" alt="" />
      </form>
    </nav>
    <div>
        <h4 className="heading">Camera Management</h4>
        <hr />
    </div>

</Fragment>
  );
};

export default Navbar;
