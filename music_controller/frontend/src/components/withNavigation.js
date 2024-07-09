import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";

function withNavigation(Component) {
  return (props) => {
    const navigate = useNavigate();
    const params = useParams();
    return <Component {...props} navigate={navigate} params={params} />;
  };
}

export default withNavigation;
