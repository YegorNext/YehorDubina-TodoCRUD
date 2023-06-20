import React, { useState } from 'react';

const EditItem = ({ item, onSave, onCancel }) => {
  const [editedTitle, setEditedTitle] = useState(item.title);
  const [editedDescription, setEditedDescription] = useState(item.description);

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleSave = () => {
    onSave(editedTitle, editedDescription);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <tr>
      <td>
        <input value={editedTitle} onChange={handleTitleChange} />
      </td>
      <td>
        <input value={editedDescription} onChange={handleDescriptionChange} />
      </td>
      <td>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditItem;