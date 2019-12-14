import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default ChildComponent => {
  const RequireAuth = (props) => {
    switch (props.auth) {
      case false:
        return <Redirect to="/" />;
      case null:
        return <div>...loading</div>;
      default:
        return <ChildComponent {...props} />;
    }
  };

  const mapState = state => ({
    auth: state.auth.isAuth,
    user: state.auth.user
  });

  return connect(
    mapState,
    null
  )(RequireAuth);
};
