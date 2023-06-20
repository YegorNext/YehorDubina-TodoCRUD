import React from 'react';

const DeleteButton = ({ onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteButton;