import EditUserForm from "../EditUserForm"
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { destroyUser } from "../../store/users";

const Profile = ({ user }) => {

  const sessionUser = useSelector(state => state.users[user.id])

  const dispatch = useDispatch()
  const history = useHistory()
  
  const deleteFunction = () => {
    dispatch(destroyUser(user.id))
    history.push('/')
  }
  return(
    <>
      {sessionUser?.username}
      <EditUserForm user={sessionUser}/>
      <button onClick={deleteFunction}>Delete User</button>
    </>
  )
};

export default Profile;