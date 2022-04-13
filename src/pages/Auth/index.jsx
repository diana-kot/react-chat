import PropTypes from "prop-types";
import { Route, Routes, Outlet } from "react-router-dom";


import { LoginForm, RegisterForm } from "@modules";

import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">

      <Outlet />
       
      </div>
    </section>
  );
};

Auth.propTypes = {
  // text: PropTypes.string,
};

export default Auth;
