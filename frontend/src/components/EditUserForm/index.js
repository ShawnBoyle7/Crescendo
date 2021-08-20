import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { editPlaylist } from "../../store/playlists";
import { useParams } from "react-router-dom";

const EditUserForm = ({ user }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState([]);
}

const handleSubmit = (e) => {
  e.preventDefault()

  const formData = {
    username,
    id: user.id
  }

  
}

export default EditUserForm;