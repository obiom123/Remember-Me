import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


const PrivateRouteContacts = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('add-contact') === "true" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/addcontact",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

export default PrivateRouteContacts;