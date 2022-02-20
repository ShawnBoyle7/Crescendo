import React from 'react';
import { useSelector } from 'react-redux';
import EditUserForm from '../EditUserForm';

function Profile({ user }) {
  const sessionUser = useSelector((state) => state.users[user.id]);

  return (
    <>
      {sessionUser.username}
      <EditUserForm user={sessionUser} />
    </>
  );
}

export default Profile;
