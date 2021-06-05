import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ user }) {
  return (
    <div>
      { user
        ? <h1 className="stack-top">Hello, {user.fullName}</h1>
        : <h1 className="stack-top">Please Sign In!</h1>
      }
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
