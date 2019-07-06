import React from "react";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

/* Variables */
const gridLayout = {
  display: "grid",
  gridTemplateColumns: "repeat( auto-fit, minmax( 250px, 1fr )",
  gridGap: "1rem"
};

const Users = ({ loading, users }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={gridLayout}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

/* PropTypes */
Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired
};

export default Users;
