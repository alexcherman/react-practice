import React from 'react';

const Auth = (props) => {
  const pass = 'password'

  if (pass !== 'password') {
    return 'Nope'
  } else {
    return props.children; 
  }
}

export default Auth;