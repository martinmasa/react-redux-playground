import React, { Component } from 'react';
import { UserContext } from '../../UserContext';

class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(context) => (
          <div>
            <h3>User</h3>
            {context.user.name}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default User;
