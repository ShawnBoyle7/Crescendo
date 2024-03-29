import React from 'react';
import { Modal } from '../../context/Modal';
import EditPlaylistForm from '../EditPlaylistForm';

function EditPlaylistFormModal({ playlistId, showEditModal, setShowEditModal }) {
  return (
    <>
      {showEditModal && (
      <Modal className="edit-playlist-modal" onClose={() => setShowEditModal(false)}>
        <EditPlaylistForm playlistId={playlistId} setShowEditModal={setShowEditModal} />
      </Modal>
      )}
    </>
  );
}

export default EditPlaylistFormModal;
