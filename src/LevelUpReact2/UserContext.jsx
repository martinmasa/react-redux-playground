import React from 'react';

export const UserContext = React.createContext();

export class UserProvider extends React.Component {
  state = {
    user: {
      id: 1234,
      name: 'King Kong'
    }
  };

  render() {
    const { user } = this.state;
    const { children } = this.props;

    return (
      <UserContext.Provider
        value={{
          user
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}
