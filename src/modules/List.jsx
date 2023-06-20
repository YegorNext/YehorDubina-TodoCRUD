import React, { useState } from 'react';
import DeleteButton from './DeleteButton';
import EditItem from './EditItem';

const ListItem = ({ item, onDelete, onEdit, onCancel }) => {
  const [completed, setCompleted] = useState(item.completed);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleComplete = () => {
    setCompleted(!completed);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (editedTitle, editedDescription) => {
    setIsEditing(false);
    onEdit(item.id, editedTitle, editedDescription);
  };

  const handleCancel = () => {
    setIsEditing(false);
    onCancel();
  };

  if (isEditing) {
    return (
      <EditItem
        item={item}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    );
  }

  return (
    <tr className={completed ? 'completed' : ''}>
      <td>{item.id}</td>
      <td>{item.created}</td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td className="td-status">
        <input type="checkbox" checked={completed} onChange={handleComplete} />
      </td>
      <td>
        <button onClick={handleEdit}>Edit</button>
      </td>
      <td>
        <DeleteButton onDelete={handleDelete} />
      </td>
    </tr>
  );
};

const ListItems = ({ items, onDelete, onEdit, onCancel }) => {
  const sortedItems = [...items].sort((a, b) => {
    return new Date(a.created) - new Date(b.created);
  });

  return (
    <tbody>
      {sortedItems.map((item) => (
        <ListItem
          item={item}
          key={item.id}
          onDelete={onDelete}
          onEdit={onEdit}
          onCancel={onCancel}
        />
      ))}
    </tbody>
  );
};

export default ListItems;