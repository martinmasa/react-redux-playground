import React, { Component } from 'react';
import { UserContext } from '../../UserContext';

class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(context) => (
          <div>
            <h3>User</h3>
            <p>{context.user.name}</p>
            <button type="button" onClick={context.logout}>
              Logout
            </button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default User;
