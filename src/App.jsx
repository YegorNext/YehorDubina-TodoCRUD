import React from 'react';
import ListItems from './modules/List';
import handleSubmit from './modules/Form.js';


const App = () => {
  const [items, setItems] = React.useState([]);

  const handleDelete = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={(e) => handleSubmit(e, items, setItems)}>
        <input name="title" placeholder="Title" />
        <input name="description" placeholder="Description" />
        <button type="submit">Create</button>
      </form>
      <table className="table-container">
        <ListItems items={items} onDelete={handleDelete} />
      </table>
    </div>
  );
}

export default App;