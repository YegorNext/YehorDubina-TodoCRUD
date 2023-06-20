import getCurrentTime from './getCurrentTime';
import { generateId } from './UniqueIdGenerator';

const handleSubmit = (e, items, setItems) => {
  e.preventDefault();
  const title = e.target.elements.title.value;
  const description = e.target.elements.description.value;

  const newItem = {
    id: generateId(),
    title,
    created: getCurrentTime(),
    description,
    completed: true,
  };

  setItems([...items, newItem]);

  e.target.elements.title.value = '';
  e.target.elements.description.value = '';
};

export default handleSubmit;