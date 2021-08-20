import EditUserForm from "../EditUserForm"

const Profile = ({ user }) => {
  return(
    <>
      {user.username}
      <EditUserForm user={user}/>
    </>
  )
};

export default Profile;