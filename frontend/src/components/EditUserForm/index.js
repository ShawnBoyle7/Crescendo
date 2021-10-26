import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { updateUsername } from "../../store/users";

const EditUserForm = ({ user }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            username,
            id: user.id
        };

        dispatch(updateUsername(formData))
            .then(() => history.push("/"))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
                <label>
                    Username
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <button>Submit</button>
            </form>
        </>
    )

}

export default EditUserForm;