import React, { Component } from "react";
import UserItem from "./UserItem";

/* Variables */
const gridLayout = {
  display: "grid",
  gridTemplateColumns: "repeat( auto-fit, minmax( 250px, 1fr )",
  gridGap: "1rem"
};

class Users extends Component {
  render() {
    return (
      <div style={gridLayout}>
        {this.props.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
