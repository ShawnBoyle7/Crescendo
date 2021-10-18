import EditUserForm from "../EditUserForm"
import { useDispatch, useSelector } from "react-redux";

const Profile = ({ user }) => {

  const sessionUser = useSelector(state => state.users[user.id])

  const dispatch = useDispatch()

  return (
    <>
      {sessionUser?.username}
      <EditUserForm user={sessionUser} />
    </>
  )
};

export default Profile;