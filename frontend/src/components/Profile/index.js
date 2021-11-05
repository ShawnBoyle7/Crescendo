import EditUserForm from "../EditUserForm"
import { useSelector } from "react-redux";

const Profile = ({ user }) => {

    const sessionUser = useSelector(state => state.users[user.id])


    return (
        <>
            {sessionUser?.username}
            <EditUserForm user={sessionUser} />
        </>
    )
};

export default Profile;