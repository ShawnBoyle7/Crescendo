import React from "react";
import { Modal } from "../../context/Modal";
import DeletePlaylistConfirmation from "../DeletePlaylistConfirmation";

function DeletePlaylistModal({ playlistId, showDeleteModal, setShowDeleteModal }) {

    return (
        <>
            {showDeleteModal && (
            <Modal onClose={() => setShowDeleteModal(false)}>
                <DeletePlaylistConfirmation playlistId={playlistId} setShowDeleteModal={setShowDeleteModal}/>
            </Modal>
            )}
        </>
    )
}

export default DeletePlaylistModal;