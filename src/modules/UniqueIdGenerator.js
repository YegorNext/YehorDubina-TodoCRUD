let nextId = 1;

export const generateId = () => {
  const id = nextId;
  nextId++;
  return id;
};