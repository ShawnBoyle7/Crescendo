import React from 'react';
import { Modal } from '../../context/Modal';
import DeletePlaylistConfirmation from '../DeletePlaylistConfirmation';

function DeletePlaylistModal({ playlistId, showDeleteModal, setShowDeleteModal }) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showDeleteModal && (
      <Modal className="delete-playlist-modal" onClose={() => setShowDeleteModal(false)}>
        <DeletePlaylistConfirmation
          playlistId={playlistId}
          setShowDeleteModal={setShowDeleteModal}
        />
      </Modal>
      )}
    </>
  );
}

export default DeletePlaylistModal;
